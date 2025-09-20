}

function setActivityCarouselIndex(index, shouldScroll = true) {
  if (index < 0 || index >= activityCarouselItems.length) {
    return;
  }

  activityCarouselIndex = index;

  if (shouldScroll && activityCarouselTrack) {
    activityCarouselScrollFrameId && cancelAnimationFrame(activityCarouselScrollFrameId);
    activityCarouselScrollFrameId = requestAnimationFrame(() => {
      const targetScroll = activityCarouselItems[index].offsetLeft - activityCarouselTrack.offsetWidth / 2 + activityCarouselItems[index].offsetWidth / 2;
      activityCarouselTrack.scrollTo({ left: targetScroll, behavior: "smooth" });
    });
  }

  activityCarouselDotButtons.forEach((button, i) => {
    button.classList.toggle("activity-carousel__dot--active", i === index);
  });

  if (activityCarouselPrev) {
    activityCarouselPrev.disabled = index === 0;
  }

  if (activityCarouselNext) {
    activityCarouselNext.disabled = index === activityCarouselItems.length - 1;
  }
}

function handleActivityCarouselScroll() {
  if (!activityCarouselTrack || activityCarouselItems.length === 0) {
    return;
  }

  let closestIndex = 0;
  let closestDistance = Infinity;

  activityCarouselItems.forEach((item, index) => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const trackCenter = activityCarouselTrack.scrollLeft + activityCarouselTrack.offsetWidth / 2;
    const distance = Math.abs(itemCenter - trackCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  if (closestIndex !== activityCarouselIndex) {
    setActivityCarouselIndex(closestIndex, false);
  }
}

function handleActivityCarouselKeydown(event) {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setActivityCarouselIndex(Math.max(0, activityCarouselIndex - 1));
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    setActivityCarouselIndex(Math.min(activityCarouselItems.length - 1, activityCarouselIndex + 1));
  }
}

function renderActivityCarousel() {
  if (!activityCarouselSection) {
    return;
  }

  if (FEATURED_ACTIVITIES.length === 0) {
    activityCarouselSection.style.display = "none";
    return;
  }

  activityCarouselSection.style.display = "block";

  if (activityCarouselTrack) {
    activityCarouselTrack.innerHTML = FEATURED_ACTIVITIES.map((entry, index) => buildActivityCardMarkup(entry, index)).join("");
    activityCarouselItems = Array.from(activityCarouselTrack.children);
  }

  if (activityCarouselDots) {
    activityCarouselDots.innerHTML = FEATURED_ACTIVITIES.map((_, index) =>
      `<button class="activity-carousel__dot" aria-label="Visa aktivitet ${index + 1}"></button>`
    ).join("");
    activityCarouselDotButtons = Array.from(activityCarouselDots.children);
  }

  if (activityCarouselPrev) {
    activityCarouselPrev.addEventListener("click", () => setActivityCarouselIndex(activityCarouselIndex - 1));
  }

  if (activityCarouselNext) {
    activityCarouselNext.addEventListener("click", () => setActivityCarouselIndex(activityCarouselIndex + 1));
  }

  if (activityCarouselTrack) {
    activityCarouselTrack.addEventListener("scroll", handleActivityCarouselScroll);
    activityCarouselTrack.addEventListener("keydown", handleActivityCarouselKeydown);
  }

  activityCarouselDotButtons.forEach((button, index) => {
    button.addEventListener("click", () => setActivityCarouselIndex(index));
  });

  setActivityCarouselIndex(0);

  if (hasPexelsApiKey() && !hasHydratedActivityCarouselImages) {
    hydrateActivityCarouselImages();
  } else if (!hasPexelsApiKey()) {
    displayActivityCarouselNotice("För bättre visuellt innehåll, konfigurera en Pexels API-nyckel.");
  }
}

function hasPexelsApiKey() {
  return pexelsApiKey && pexelsApiKey.length > 0;
}

function displayActivityCarouselNotice(message) {
  if (activityCarouselNotice) {
    activityCarouselNotice.style.display = "block";
    activityCarouselNotice.textContent = message;
  }
}

function hideActivityCarouselNotice() {
  if (activityCarouselNotice) {
    activityCarouselNotice.style.display = "none";
  }
}

async function hydrateActivityCarouselImages() {
  if (!hasPexelsApiKey() || hasHydratedActivityCarouselImages) {
    return;
  }

  try {
    displayActivityCarouselNotice("Laddar bilder...");

    for (const [index, entry] of FEATURED_ACTIVITIES.entries()) {
      const card = activityCarouselItems[index];
      if (card) {
        await hydrateActivityCardImage(card, entry);
      }
    }

    hideActivityCarouselNotice();
    hasHydratedActivityCarouselImages = true;
  } catch (error) {
    console.error("Failed to hydrate activity carousel images:", error);
    displayActivityCarouselNotice("Kunde inte ladda bilder. Kontrollera API-nyckeln.");
  }
}

async function hydrateActivityCardImage(card, entry) {
  try {
    const photo = await searchPexelsPhoto(entry);
    if (photo) {
      applyActivityCardImage(card, entry, photo);
    }
  } catch (error) {
    console.error(`Failed to load image for activity "${entry.title}":`, error);
  }
}

async function searchPexelsPhoto(entry) {
  const queries = createPexelsQueries(entry);

  for (const query of queries) {
    try {
      const cachedPhoto = pexelsImageCache.get(query);
      if (cachedPhoto) {
        return cachedPhoto;
      }

      const response = await fetch(`${PEXELS_SEARCH_ENDPOINT}?query=${encodeURIComponent(query)}&per_page=10&orientation=landscape`, {
        headers: { Authorization: pexelsApiKey }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const availablePhotos = data.photos?.filter(photo => !usedPexelsPhotoIds.has(photo.id)) || [];

      if (availablePhotos.length > 0) {
        const photo = availablePhotos[0];
        usedPexelsPhotoIds.add(photo.id);
        pexelsImageCache.set(query, photo);
        return photo;
      }
    } catch (error) {
      console.warn(`Pexels search failed for query "${query}":`, error);
    }
  }

  return null;
}

function createPexelsQueries(entry) {
  const queries = [];

  const subjectQuery = SUBJECT_PEXELS_QUERY_MAP[entry.subject];
  if (subjectQuery) {
    queries.push(subjectQuery);
  }

  const hintQuery = FEATURED_ACTIVITY_IMAGE_HINTS[entry.title];
  if (hintQuery) {
    queries.push(hintQuery);
  }

  if (entry.tags && entry.tags.length > 0) {
    const tagQuery = entry.tags.join(" ");
    if (tagQuery.length > 0) {
      queries.push(tagQuery);
    }
  }

  if (queries.length === 0) {
    queries.push("education learning school");
  }

  return queries;
}

function applyActivityCardImage(card, entry, photo) {
  if (!card || !photo) {
    return;
  }

  let imageContainer = card.querySelector(".activity-card__image");
  if (!imageContainer) {
    imageContainer = document.createElement("div");
    imageContainer.className = "activity-card__image";

    const header = card.querySelector(".activity-card__header");
    if (header) {
      card.insertBefore(imageContainer, header);
    } else {
      card.insertBefore(imageContainer, card.firstChild);
    }
  }

  const img = document.createElement("img");
  img.className = "activity-card__image-element";
  img.src = photo.src?.medium || photo.src?.original;
  img.alt = formatPexelsAltText(entry, photo);
  img.loading = "lazy";

  img.addEventListener("load", () => {
    imageContainer.innerHTML = "";
    imageContainer.appendChild(img);

    const credit = document.createElement("div");
    credit.className = "activity-card__image-credit";
    credit.innerHTML = `Foto av <a href="${photo.photographer_url}" target="_blank" rel="noopener">${photo.photographer}</a> från Pexels`;
    imageContainer.appendChild(credit);
  });

  img.addEventListener("error", () => {
    console.warn(`Failed to load image for activity "${entry.title}"`);
    imageContainer.innerHTML = "";
  });
}

function formatPexelsAltText(entry, photo) {
  if (photo.alt && photo.alt.trim().length > 0) {
    return photo.alt;
  }

  if (entry.subject && entry.grade) {
    return `Bild relaterad till ${entry.subject} för ${entry.grade}`;
  }

  return "Utbildningsrelaterad bild";
}

function setActiveSectionHighlight(sectionId) {
  navAnchorLinks.forEach(link => {
    const isActive = link.dataset.scrollTarget === sectionId;
    link.classList.toggle("top-nav__link--active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });

  quickNavCards.forEach(card => {
    const isActive = card.dataset.scrollTarget === sectionId;
    card.classList.toggle("section-nav__card--active", isActive);
    card.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function updateScrollSpy() {
  if (trackedSections.length === 0) {
    return;
  }

  const scrollPosition = window.scrollY + window.innerHeight / 3;
  let activeSectionId = trackedSections[0].id;

  for (const section of trackedSections) {
    if (section.offsetTop <= scrollPosition) {
      activeSectionId = section.id;
    }
  }

  setActiveSectionHighlight(activeSectionId);
}

function scheduleScrollSpyUpdate() {
  if (scrollSpyFrameId) {
    return;
  }

  scrollSpyFrameId = requestAnimationFrame(() => {
    updateScrollSpy();
    scrollSpyFrameId = null;
  });
}

function renderProgressionControls() {
  if (!progressionControls) {
    return;
  }

  const areas = Object.keys(PROGRESSION_MAP);
  progressionControls.innerHTML = areas.map(area => {
    const isActive = area === activeProgressionArea;
    return `<button class="progression-control${isActive ? " progression-control--active" : ""}" data-area="${area}">${area}</button>`;
  }).join("");

  progressionControls.addEventListener("click", event => {
    if (event.target.matches(".progression-control")) {
      activeProgressionArea = event.target.dataset.area;
      renderProgressionControls();
      renderProgressionGrid();
    }
  });
}

function renderProgressionGrid() {
  if (!progressionGrid || !PROGRESSION_MAP[activeProgressionArea]) {
    return;
  }

  const area = PROGRESSION_MAP[activeProgressionArea];
  const stages = Object.entries(area.stages);

  progressionGrid.innerHTML = stages.map(([stageName, stage]) => `
    <div class="progression-stage">
      <h3 class="progression-stage__title">${stageName}</h3>
      <p class="progression-stage__focus">${stage.focus}</p>
      <div class="progression-stage__content">
        <div class="progression-stage__section">
          <h4>Nyckelkompetenser</h4>
          <ul>${stage.keySkills.map(skill => `<li>${skill}</li>`).join("")}</ul>
        </div>
        <div class="progression-stage__section">
          <h4>AI-ingångar</h4>
          <ul>${stage.aiAngles.map(angle => `<li>${angle}</li>`).join("")}</ul>
        </div>
        <div class="progression-stage__section">
          <h4>Reflektionsfrågor</h4>
          <ul>${stage.guidingQuestions.map(question => `<li>${question}</li>`).join("")}</ul>
        </div>
        <div class="progression-stage__checkpoint">
          <strong>Checkpoint:</strong> ${stage.checkpoint}
        </div>
      </div>
    </div>
  `).join("");

  if (progressionSummary) {
    progressionSummary.textContent = area.summary;
  }
}

function renderResources() {
  if (!resourceAccordion) {
    return;
  }

  resourceAccordion.innerHTML = RESOURCE_GROUPS.map((group, groupIndex) => `
    <div class="resource-group">
      <h3 class="resource-group__title">
        <button class="resource-group__toggle" aria-expanded="false" aria-controls="resource-group-${groupIndex}">
          ${group.name}
        </button>
      </h3>
      <div class="resource-group__content" id="resource-group-${groupIndex}">
        <p class="resource-group__summary">${group.summary}</p>
        <ul class="resource-list">
          ${group.items.map(item => `
            <li class="resource-item">
              <a href="${item.url}" target="_blank" rel="noopener" class="resource-item__link">
                ${item.title}
              </a>
              <p class="resource-item__description">${item.description}</p>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  resourceAccordion.addEventListener("click", event => {
    if (event.target.matches(".resource-group__toggle")) {
      const button = event.target;
      const content = button.parentNode.nextElementSibling;
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", !isExpanded);
      content.style.display = isExpanded ? "none" : "block";
    }
  });
}

function resetAllFilters() {
  if (subjectSelect) subjectSelect.value = "alla";
  gradeCheckboxes.forEach(checkbox => checkbox.checked = true);
  tagCheckboxes.forEach(checkbox => checkbox.checked = true);
  if (searchInput) searchInput.value = "";

  renderResults();
}

function populateAiSubjectFilter() {
  if (!aiSubjectFilter) {
    return;
  }

  aiSubjectFilter.innerHTML = '<option value="alla">Alla ämnen</option>';
  AI_SUBJECT_NAMES.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    aiSubjectFilter.appendChild(option);
  });

  aiSubjectFilter.addEventListener("change", () => {
    aiActiveSubject = aiSubjectFilter.value;
    renderAiGuide();
  });
}

function renderAiAspectFilters() {
  if (!aiAspectFilters) {
    return;
  }

  aiAspectFilters.innerHTML = AI_ASPECTS.map(aspect => `
    <button class="ai-aspect-chip" data-aspect="${aspect.id}">
      <span class="ai-aspect-chip__icon">${aspect.icon}</span>
      <span class="ai-aspect-chip__label">${aspect.name}</span>
    </button>
  `).join("");

  aiAspectButtons = Array.from(aiAspectFilters.querySelectorAll(".ai-aspect-chip"));

  aiAspectButtons.forEach(button => {
    button.addEventListener("click", () => {
      const aspect = button.dataset.aspect;
      if (aiActiveAspects.has(aspect)) {
        aiActiveAspects.delete(aspect);
      } else {
        aiActiveAspects.add(aspect);
      }
      updateAiAspectChipStates();
      renderAiGuide();
    });
  });
}

function updateAiAspectChipStates() {
  aiAspectButtons.forEach(button => {
    const aspect = button.dataset.aspect;
    const isActive = aiActiveAspects.has(aspect);
    button.classList.toggle("ai-aspect-chip--active", isActive);
    button.setAttribute("aria-pressed", isActive);
  });
}

function renderAiGuideSummary(count, total) {
  if (!aiGuideSummary) {
    return;
  }

  const message = count === total
    ? `Visar alla ${total} ämnen.`
    : count === 0
      ? "Inga ämnen matchade filtren. Justera urvalet."
      : `Visar ${count} av ${total} ämnen.`;

  aiGuideSummary.textContent = message;
}

function buildAiGuideCard(entry) {
  const aspectsMarkup = entry.aspects.map(aspectId => {
    const aspect = AI_ASPECT_MAP[aspectId];
    return aspect ? `<span class="ai-guide-card__aspect" title="${aspect.description}">${aspect.icon} ${aspect.name}</span>` : "";
  }).filter(Boolean).join("");

  const highlightsMarkup = entry.highlights.map(highlight => `<li>${highlight}</li>`).join("");

  return `
    <div class="ai-guide-card">
      <h3 class="ai-guide-card__title">${entry.subject}</h3>
      <p class="ai-guide-card__summary">${entry.summary}</p>
      <div class="ai-guide-card__aspects">${aspectsMarkup}</div>
      <details class="ai-guide-card__details">
        <summary>Konkreta exempel</summary>
        <ul class="ai-guide-card__highlights">${highlightsMarkup}</ul>
      </details>
    </div>
  `;
}

function renderAiGuide() {
  if (!aiGuideGrid || !aiGuideEmpty) {
    return;
  }

  let filtered = AI_SUBJECT_GUIDE;

  if (aiActiveSubject !== "alla") {
    filtered = filtered.filter(entry => entry.subject === aiActiveSubject);
  }

  if (aiActiveAspects.size > 0) {
    filtered = filtered.filter(entry =>
      entry.aspects.some(aspect => aiActiveAspects.has(aspect))
    );
  }

  renderAiGuideSummary(filtered.length, AI_TOTAL_SUBJECTS);

  if (filtered.length === 0) {
    aiGuideGrid.style.display = "none";
    aiGuideEmpty.style.display = "block";
  } else {
    aiGuideGrid.style.display = "grid";
    aiGuideEmpty.style.display = "none";
    aiGuideGrid.innerHTML = filtered.map(entry => buildAiGuideCard(entry)).join("");
  }
}

function initAISection() {
  populateAiSubjectFilter();
  renderAiAspectFilters();
  renderAiGuide();

  if (aiAspectReset) {
    aiAspectReset.addEventListener("click", () => {
      aiActiveAspects.clear();
      updateAiAspectChipStates();
      renderAiGuide();
    });
  }
}

function addEventListeners() {
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("top-nav__links--visible");
    });
  }

  if (subjectSelect) {
    subjectSelect.addEventListener("change", renderResults);
  }

  gradeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", renderResults);
  });

  tagCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", renderResults);
  });

  if (searchInput) {
    searchInput.addEventListener("input", renderResults);
  }

  if (resetFiltersButton) {
    resetFiltersButton.addEventListener("click", resetAllFilters);
  }

  scrollButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      const targetId = button.dataset.scrollTarget;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  window.addEventListener("scroll", scheduleScrollSpyUpdate);
}

function initFiltersReveal() {
  const filterSections = document.querySelectorAll(".filter-section");

  filterSections.forEach(section => {
    const toggle = section.querySelector(".filter-section__toggle");
    const content = section.querySelector(".filter-section__content");

    if (toggle && content) {
      toggle.addEventListener("click", () => {
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !isExpanded);
        content.style.display = isExpanded ? "none" : "block";
      });
    }
  });
}

function initFilterPointerEffects() {
  const interactiveElements = document.querySelectorAll(".tag-chip, .grade-chip, .ai-aspect-chip");

  interactiveElements.forEach(element => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = "scale(1.05)";
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "scale(1)";
    });

    element.addEventListener("focus", () => {
      element.style.transform = "scale(1.05)";
    });

    element.addEventListener("blur", () => {
      element.style.transform = "scale(1)";
    });

    element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        element.click();
      }
    });
  });
}

function init() {
  populateSubjectOptions();
  renderTagFilters();
  renderResults();
  renderActivityCarousel();
  renderProgressionControls();
  renderProgressionGrid();
  renderResources();
  initAISection();
  addEventListeners();
  initFiltersReveal();
  initFilterPointerEffects();
  updateScrollSpy();
}