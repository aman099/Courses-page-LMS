// Sidebar popup(in smaller screens)
const sidebar = document.querySelector("aside");
const hambuergerIcon = document.querySelector(".hamburger-icon");
const overlay = document.querySelector(".overlay");

hambuergerIcon.addEventListener("click", () => {
	sidebar.classList.add("active");
	overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});

//
// Wrapper popup
var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
	li_elements[i].addEventListener("click", function () {
		li_elements.forEach(function (li) {
			li.classList.remove("active");
		});
		this.classList.add("active");
		var li_value = this.getAttribute("data-li");
		item_elements.forEach(function (item) {
			item.style.display = "none";
		});
		if (li_value == "generative-ai") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "data-science") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "ai-machine") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "project-management") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "cyber-security") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "cloud-computing") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "devops") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "business-leadership") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "quality-management") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "software-development") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "agile-scrum") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "it-service") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "digital-marketing") {
			document.querySelector("." + li_value).style.display = "block";
		} else {
			console.log("");
		}
	});
}

const allCoursesBtn = document.querySelector(".all-courses-btn-container");
const wrapperEl = document.querySelector(".wrapper");
const overlay2 = document.querySelector(".overlay2");

allCoursesBtn.addEventListener("mouseover", () => {
	wrapperEl.classList.add("active");
	overlay2.classList.add("active");
});
wrapperEl.addEventListener("mouseover", (e) => {
	if (!wrapperEl.classList.contains("active"))
		wrapperEl.classList.add("activate");
	overlay2.classList.add("active");
});
allCoursesBtn.addEventListener("mouseleave", (e) => {
	wrapperEl.classList.remove("active");
	overlay2.classList.remove("active");
});
wrapperEl.addEventListener("mouseleave", (e) => {
	if (!wrapperEl.classList.contains("active"))
		wrapperEl.classList.remove("activate");
	overlay2.classList.remove("active");
});

// Load more
const loadMore = document.querySelector(".load-more-btn button.primary-btn");
const loader = document.querySelector(".multiloader");
const mainCourses = document.querySelectorAll(
	".main-courses-container .main-course"
);

loadMore.addEventListener("click", () => {
	loader.classList.remove("hidden");
	loadMore.classList.add("hide");

	setTimeout(() => {
		loader.classList.add("hidden");
		loadMore.classList.remove("hide");
		mainCourses.forEach((mainCourse) => {
			mainCourse.classList.remove("hidden");
		});
	}, 5000);
});

// Input sticky
const searchInputCont = document.querySelector("#search-input");

// const options = {};

// const observer = new IntersectionObserver(function (entries, observer7) {
// 	entries.forEach((entry) => {
// 		if (!entry.isIntersecting) {
// 			searchInputCont.classList.add("fixed");
// 		} else {
// 			searchInputCont.classList.remove("fixed");
// 		}
// 	});
// }, options);

// observer.observe(searchInputCont);

document.addEventListener("scroll", () => {
	if (scrollY > 300 && innerWidth > 1200) searchInputCont.classList.add("fixed");
	else searchInputCont.classList.remove("fixed");
});

//
const filterIconSpan = document.querySelector(".filter-icon span");
const mainLeft = document.querySelector(".main-content-container .main-left");
const crossIcon = document.querySelector(".main-left .cross-icon span");

filterIconSpan.addEventListener("click", () => {
	mainLeft.classList.add("show");
});
crossIcon.addEventListener("click", () => {
	mainLeft.classList.remove("show");
});

// Filter functionality
const courseLabels = document.querySelectorAll(
	".course-details-cont .course-label.hidden span"
);
const universityLabelInput = document.querySelector("input#university-prog");
const mastersLabelInput = document.querySelector("input#masters-prog");
const courseLabelInput = document.querySelector("input#course");

// courseLabels.forEach((courseLabel) => {
// 	console.log(courseLabel.textContent);
// });

// 	console.log(mainContentCards);
// });
const noOfCourses = document.querySelector(".main-courses-title h4 span");

let mainCoursesArr = [...mainCourses];

noOfCourses.textContent = mainCoursesArr.length;

let newCourses;

universityLabelInput.addEventListener("click", () => {
	if (!universityLabelInput.checked) {
		newCourses = mainCoursesArr.filter(
			(mainCourse) =>
				mainCourse.querySelector(".course-details-cont .course-label.hidden span")
					.textContent === "University Program"
		);

		newCourses.forEach((course) => (course.style.display = "none"));
	} else {
		newCourses = mainCoursesArr.filter(
			(mainCourse) =>
				mainCourse.querySelector(".course-details-cont .course-label.hidden span")
					.textContent === "University Program"
		);

		newCourses.forEach((course) => (course.style.display = "flex"));
	}
});

mastersLabelInput.addEventListener("click", () => {
	if (!mastersLabelInput.checked) {
		mainCoursesArr
			.filter(
				(mainCourse) =>
					mainCourse.querySelector(".course-details-cont .course-label.hidden span")
						.textContent === "Master's Program"
			)
			.forEach((course) => (course.style.display = "none"));
	} else {
		mainCoursesArr
			.filter(
				(mainCourse) =>
					mainCourse.querySelector(".course-details-cont .course-label.hidden span")
						.textContent === "Master's Program"
			)
			.forEach((course) => (course.style.display = "flex"));
	}
});

courseLabelInput.addEventListener("click", () => {
	if (!courseLabelInput.checked) {
		mainCoursesArr
			.filter(
				(mainCourse) =>
					mainCourse.querySelector(".course-details-cont .course-label.hidden span")
						.textContent === "Course"
			)
			.forEach((course) => (course.style.display = "none"));
	} else {
		mainCoursesArr
			.filter(
				(mainCourse) =>
					mainCourse.querySelector(".course-details-cont .course-label.hidden span")
						.textContent === "Course"
			)
			.forEach((course) => (course.style.display = "flex"));
	}
});

// let mainCoursesArr = [...mainCourses];

// mainCoursesArr
// 	.filter(
// 		(mainCourse) =>
// 			mainCourse.querySelector(".course-details-cont .course-label.hidden span")
// 				.textContent === "University Program"
// 	)
// 	.forEach((course) => (course.style.display = "none"));

console.log(typeof noOfCourses.textContent);
// console.log(noOfCourses);
