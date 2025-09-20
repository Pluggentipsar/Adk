
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const subjectSelect = document.getElementById("subjectFilter");
const tagFiltersContainer = document.getElementById("tagFilters");
const gradeCheckboxes = Array.from(document.querySelectorAll('[data-filter="grade"] input[type="checkbox"]'));
const searchInput = document.getElementById("searchInput");
const resultsGrid = document.getElementById("resultsGrid");
const resultsCount = document.getElementById("resultsCount");
const progressionControls = document.getElementById("progressionControls");
const progressionGrid = document.getElementById("progressionGrid");
const progressionSummary = document.getElementById("progressionSummary");
const resourceAccordion = document.getElementById("resourceAccordion");
const resetFiltersButton = document.getElementById("resetFilters");
const scrollButtons = Array.from(document.querySelectorAll("[data-scroll-target]"));
const navAnchorLinks = Array.from(document.querySelectorAll(".top-nav__links a[data-scroll-target]"));
const quickNavCards = Array.from(document.querySelectorAll(".section-nav__card[data-scroll-target]"));
const activityCarouselSection = document.getElementById("activityCarousel");
const activityCarouselTrack = document.getElementById("activityCarouselTrack");
const activityCarouselDots = document.getElementById("activityCarouselDots");
const activityCarouselPrev = document.getElementById("activityCarouselPrev");
const activityCarouselNext = document.getElementById("activityCarouselNext");
const activityCarouselNotice = document.getElementById("activityCarouselNotice");
const sectionReferenceIds = navAnchorLinks
  .map(link => link.dataset.scrollTarget)
  .filter(id => id);

const trackedSectionIds = new Set(sectionReferenceIds);
const trackedSections = Array.from(document.querySelectorAll("section[id]"))
  .filter(section => trackedSectionIds.has(section.id));

let scrollSpyFrameId = null;
const aiAspectFilters = document.getElementById("aiAspectFilters");
const aiAspectReset = document.getElementById("aiAspectReset");
const aiSubjectFilter = document.getElementById("aiSubjectSelect");
const aiGuideSummary = document.getElementById("aiGuideSummary");
const aiGuideGrid = document.getElementById("aiGuideGrid");
const aiGuideEmpty = document.getElementById("aiGuideEmpty");
let activityCarouselItems = [];
let activityCarouselDotButtons = [];
let activityCarouselIndex = 0;
let activityCarouselScrollFrameId = null;
let tagCheckboxes = [];
let activeProgressionArea = Object.keys(PROGRESSION_MAP)[0];
let aiActiveSubject = "alla";
let aiActiveAspects = new Set();
let aiAspectButtons = [];