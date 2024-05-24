import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "div",
			attributes: {
				class: "overlay",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "overlay2",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "downside-navbar-container",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-1",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav1",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "",
									},
								},
								{
									tag: "header",
									children: [
										{
											tag: "p",
											attributes: {
												class: "request-a-callback-para",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-mobile",
															},
														},
													],
												},
												{
													content: "Request a Callback",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "",
									},
								},
								{
									tag: "p",
									attributes: {
										class: "call-us-on",
									},
									content: "<span></span>Call us on &nbsp; <span>1800-212-7688</span>",
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "button",
													attributes: {
														class: "primary-btn live-chat-btn",
													},
													content:
														"<span><i class='fa-regular fa-envelope'></i></span>&nbsp; Live Chat",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "navbar-container",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-1",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav1",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "h2",
											content: "",
										},
									],
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-2",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav2",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "div",
											attributes: {
												class: "hamburger-icon",
											},
											children: [
												{
													tag: "span",
													content: "",
												},
												{
													tag: "span",
													content: "",
												},
												{
													tag: "span",
													content: "",
												},
											],
										},
										{
											tag: "img",
											attributes: {
												src: "./assets/company_logo.svg",
												alt: "Company logo",
											},
										},
										{
											tag: "div",
											attributes: {
												class: "all-courses-btn-container",
											},
											children: [
												{
													tag: "button",
													attributes: {
														class: "primary-btn",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "grids-decoration",
															},
															children: [
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
															],
														},
													],
													content: "All Courses",
												},
												{
													tag: "div",
													attributes: {
														class: "wrapper",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "wrapper_title",
															},
															children: [
																{
																	tag: "p",
																	content: "Categories",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "wrapper-grid",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "wrapper_left",
																	},
																	children: [
																		{
																			tag: "ul",
																			children: [
																				{
																					tag: "li",
																					attributes: {
																						class: "active",
																						"data-li": "generative-ai",
																					},
																					content: "<p>Data Science & Business Analytics</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "ai-machine",
																					},
																					content: "<p>AI & Machine Learning</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "project-management",
																					},
																					content: "<p>Project Management</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "cyber-security",
																					},
																					content: "<p>Cyber Security</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "cloud-computing",
																					},
																					content: "<p>Cloud Computing</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "devops",
																					},
																					content: "<p>Devops</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "business-leadership",
																					},
																					content: "<p>Business & Leadership</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "quality-management",
																					},
																					content: "<p>Quality Management</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "software-development",
																					},
																					content: "<p>Software Development</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "agile-scrum",
																					},
																					content: "<p>Agile & Scrum</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "it-service",
																					},
																					content: "<p>IT Service & Architecture</p>",
																				},
																				{
																					tag: "li",
																					attributes: {
																						"data-li": "digital-marketing",
																					},
																					content: "<p>Digital Marketing</p>",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "wrapper_right",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "container-right",
																			},
																			children: [
																				{
																					tag: "div",
																					attributes: {
																						class: "item generative-ai",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Purdue.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Applied Generative AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Purdue.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Applied Generative AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Purdue.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Applied Generative AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Purdue.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Applied Generative AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Purdue.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Applied Generative AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Generative AI",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item data-science",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/ihub.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Professional Data Science Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/ihub.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Professional Data Science Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/ihub.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Professional Data Science Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/ihub.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Professional Data Science Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/ihub.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content: "Professional Data Science Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Data Science & Business Analytics",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item ai-machine",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in AI Specialization",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore AI & Machine Learning",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item project-management",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Project-manage.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Post Graduate program in Project Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Project-manage.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Post Graduate program in Project Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Project-manage.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Post Graduate program in Project Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Project-manage.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Post Graduate program in Project Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/Project-manage.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Post Graduate program in Project Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Project Management",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item cyber-security",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cyber Security",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cyber Security",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cyber Security",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cyber Security",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cyber Security",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Cyber Security",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item cloud-computing",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cloud Computing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cloud Computing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cloud Computing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cloud Computing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Cloud Computing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Cloud Computing",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item devops",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Devops",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Devops",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Devops",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Devops",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Devops",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Cloud Computing",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item business-leadership",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Business Leadership",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Business Leadership",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Business Leadership",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Business Leadership",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Business Leadership",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Business Leadership",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item quality-management",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Business Leadership",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item quality-management",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Quality Management",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Quality Management",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item software-development",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Software Development",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Software Development",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Software Development",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Software Development",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Software Development",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Software Development",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item agile-scrum",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Agile Scrum",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Agile Scrum",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Agile Scrum",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Agile Scrum",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Agile Scrum",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Agile Scrum",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item it-service",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in IT Services & Architecture",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in IT Services & Architecture",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in IT Services & Architecture",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in IT Services & Architecture",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in IT Services & Architecture",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore IT Service & Architecture",
																								},
																							],
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "item digital-marketing",
																						style: "display: none;",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "cards-container",
																							},
																							children: [
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/IBM.svg",
																														alt: "",
																														class: "ibm-wrapper-img",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Digital Marketing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Digital Marketing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/caltech.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Digital Marketing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Digital Marketing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																								{
																									tag: "div",
																									attributes: {
																										class: "card",
																									},
																									children: [
																										{
																											tag: "div",
																											attributes: {
																												class: "img-cont",
																											},
																											children: [
																												{
																													tag: "img",
																													attributes: {
																														src: "./assets/mit-college.svg",
																														alt: "",
																													},
																												},
																											],
																										},
																										{
																											tag: "p",
																											content:
																												"Professional Certificate program in Digital Marketing",
																										},
																										{
																											tag: "div",
																											attributes: {
																												class: "duration-cont",
																											},
																											children: [
																												{
																													tag: "span",
																													content: "Cohort starts: 31 May, 2024",
																												},
																												{
																													tag: "span",
																													content: "| 4 Months",
																												},
																											],
																										},
																									],
																								},
																							],
																						},
																						{
																							tag: "div",
																							attributes: {
																								class: "item_info",
																							},
																							children: [
																								{
																									tag: "button",
																									attributes: {
																										class: "outlined-btn",
																									},
																									content: "Explore Digital Marketing",
																								},
																							],
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "input-container",
											},
											children: [
												{
													tag: "span",
													attributes: {
														class: "header-search",
													},
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-magnifying-glass",
															},
														},
													],
												},
												{
													tag: "input",
													attributes: {
														type: "text",
														placeholder: "What do you want to learn?",
														class: "header-input",
													},
												},
											],
										},
									],
								},
								{
									tag: "input",
									attributes: {
										type: "checkbox",
										id: "nav-check",
									},
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "button",
													attributes: {
														class: "outlined-btn",
													},
													content: "Log in",
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-3",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "navbar-cont-3",
							},
							children: [
								{
									tag: "section",
									attributes: {
										id: "nav3",
										class: "container is-fullhd",
									},
									children: [
										{
											tag: "header",
											children: [
												{
													tag: "div",
													attributes: {
														class: "breadcrumbs",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "a",
																	attributes: {
																		href: "https://lms-landing-page1.netlify.app/",
																	},
																	content: "Home ",
																},
															],
														},
														{
															tag: "span",
															content: " > ",
														},
														{
															tag: "span",
															content: " Search Results",
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "sidebar-container",
			},
			children: [
				{
					tag: "aside",
					children: [
						{
							tag: "header",
							children: [
								{
									tag: "h5",
									content: "Menu",
								},
							],
						},
						{
							tag: "nav",
							children: [
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "All Courses",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Digital transformation",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "search-input",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "search-input-container static container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								id: "search-input",
							},
							children: [
								{
									tag: "input",
									attributes: {
										type: "text",
										value: "web development",
									},
								},
								{
									tag: "span",
									children: [
										{
											tag: "i",
											attributes: {
												class: "fa-solid fa-magnifying-glass",
											},
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "filter-icon",
							},
							children: [
								{
									tag: "span",
									children: [
										{
											tag: "i",
											attributes: {
												class: "fa-solid fa-filter",
											},
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "main",
			attributes: {
				id: "main",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "main-content container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "main-content-container",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "main-left",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "cross-icon",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-x",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "filters",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "filters-cont",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "filters-title",
															},
															content: "<h5>Filters</h5> <p class='clear-all'>Clear all</p>",
														},
														{
															tag: "div",
															attributes: {
																class: "learning-options",
															},
															content:
																'<div class="learning-options-title left-content-title"> <p>Learning options</p></div> <div class="option option-1"> <div class="option-checkbox"> <input checked type="checkbox" id="university-prog"> <label for="university-prog">University Program</label></div> <span>(8)</span> </div> <div class="option option-2"> <div class="option-checkbox"><input checked type="checkbox" id="masters-prog"> <label for="masters-prog">Masters Program</label> </div> <span>(5)</span> </div> <div class="option option-3"> <div class="option-checkbox"> <input checked type="checkbox" id="course"> <label for="course">Course</label></div> <span>(19)</span> </div>',
														},
														{
															tag: "div",
															attributes: {
																class: "categories",
															},
															content:
																'<div class="categories-title left-content-title"> <p>Categories</p> </div> <div class="option option-1"> <div class="option-checkbox"> <input type="checkbox" id="software-development"> <label for="software-development">Software Development</label> </div> <span>(1613)</span> </div> <div class="option option-2"> <div class="option-checkbox"> <input type="checkbox" id="digital-marketing"> <label for="digital-marketing">Digital Marketing</label> </div> <span>(357)</span> </div> <div class="option option-3"> <div class="option-checkbox"> <input type="checkbox" id="project-management"> <label for="project-management">Project Management</label> </div> <span>(244)</span> </div> <div class="option option-4"> <div class="option-checkbox"> <input type="checkbox" id="career-fastrack"> <label for="career-fastrack">Career Fastrack</label> </div> <span>(157)</span> </div> <div class="option option-5"> <div class="option-checkbox"> <input type="checkbox" id="agile-scrum"> <label for="agile-scrum">Agile & Scrum</label> </div> <span>(112)</span> </div> <div class="option option-6"> <div class="option-checkbox"> <input type="checkbox" id="it-service-arch"> <label for="it-service-arch">IT Service & Architecture</label> </div> <span>(69)</span> </div> <div class="option option-7"><div class="option-checkbox"><input type="checkbox" id="quality-management"><label for="quality-management">Quality Management</label></div><span>(63)</span></div><div class="option option-8"><div class="option-checkbox"><input type="checkbox" id="cloud-computing"><label for="cloud-computing">Cloud Computing</label></div><span>(13)</span></div><div class="option option-9"><div class="option-checkbox"><input type="checkbox" id="data-science-business"><label for="data-science-business">Data Science & Business Analytics</label></div><span>(3)</span></div><div class="option option-10"><div class="option-checkbox"><input type="checkbox" id="big-data"><label for="big-data">Big Data</label></div><span>(1)</span></div><div class="option option-11"><div class="option-checkbox"><input type="checkbox" id="business-leadership"><label for="business-leadership">Business & Leadership</label></div><span>(1)</span></div><div class="option option-3"><div class="option-checkbox"><input type="checkbox" id="devops"><label for="devops">Devops</label></div><span>(244)</span></div>',
														},
														{
															tag: "div",
															attributes: {
																class: "free-resources",
															},
															content:
																'<div class="free-resources-title left-content-title"><p>Free Resources</p></div><div class="option option-1"><div class="option-checkbox"><input type="checkbox" id="all"><label for="all">All</label></div><span>(4098)</span></div><div class="option option-2"><div class="option-checkbox"><input type="checkbox" id="article"><label for="article">Article</label></div><span>(3249)</span></div><div class="option option-3"><div class="option-checkbox"><input type="checkbox" id="ebook"><label for="ebook">Ebook</label></div><span>(56)</span></div><div class="option option-4"><div class="option-checkbox"><input type="checkbox" id="tutorial"><label for="tutorial">Tutorial</label></div><span>(712)</span></div><div class="option option-5"><div class="option-checkbox"><input type="checkbox" id="webinar"><label for="webinar">Webinar</label></div><span>(81)</span></div>',
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "main-right",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "main-courses",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "main-courses-title",
													},
													children: [
														{
															tag: "h4",
															content: '32 Search Results found for "web development"',
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "main-courses-container",
													},
													content: `
														<div class="main-course course-1">
															<div class="course-img-container">
																<img src="./assets/courses/course-1.svg" alt="Course 1">
																<span class="course-label">University Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>Post Graduate Program in Full Stack Web Development</h5>
																</div>
																<div class="course-label hidden">
																	<span>University Program</span>
																</div>
																<div class="course-det-para">
																	<p>Expand your career as a software developer through this Post Graduate Program in Full Stack <strong>Web Development</strong> course in collaboration with Caltech CTME</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>9 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-2">
															<div class="course-img-container">
																<img src="./assets/courses/course-2.svg" alt="Course 2">
																<span class="course-label">Masters Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>AWS Cloud Architect</h5>
																</div>
																<div class="course-label hidden">
																	<span>Master's Program</span>
																</div>
																<div class="course-det-para">
																	<p>Certification Aligned to <strong>AWS</strong></p>
																	<p>This AWS <strong>Cloud</strong> Architect Certification Course will make you an expert in Amazon <strong>Web</strong> Services (AWS). In this program, you will become familiar with architectural principles and ...</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>11 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-3">
															<div class="course-img-container">
																<img src="./assets/courses/course-1.svg" alt="Course 1">
																<span class="course-label">University Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>Professional Certificate Program in Full Stack Development - MERN</h5>
																</div>
																<div class="course-label hidden">
																	<span>University Program</span>
																</div>
																<div class="course-det-para">
																	<p>Become a full stack developer with this Professional Certificate Program in Full Stack <strong>Development</strong> - MERN, in partnership with IITM Pravartak..</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>6 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-4">
															<div class="course-img-container">
																<img src="./assets/courses/course-1.svg" alt="Course 1">
																<span class="course-label">University Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>Post Graduate Program in Devops</h5>
																</div>
																<div class="course-label hidden">
																	<span>University Program</span>
																</div>
																<div class="course-det-para">
																	<p>Advance your career with DevOps Course Certification Training. Get a DevOps Course from industry experts and gain hands-on experience with our interactive program.</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>9 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-5">
															<div class="course-img-container">
																<img src="./assets/courses/course-2.svg" alt="Course 1">
																<span class="course-label">Master's Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>Cloud Architect</h5>
																</div>
																<div class="course-label hidden">
																	<span>Master's Program</span>
																</div>
																<div class="course-det-para">
																	<p>Cloud Architect accreditation <strong>Certification Aligned to Microsoft Azure and AWS</strong></p>
																	<p>Simplilearns Cloud Architect Certification Course will build your AWS, <strong>Microsoft</strong> Azure and Google Cloud Platform expertise from the ground up. You'll learn to master the architecture</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>11 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-6 hidden">
															<div class="course-img-container">
																<img src="./assets/courses/course-5.svg" alt="Course 5">
																<span class="course-label">University Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>Post Graduate Program in Digital Marketing</h5>
																</div>
																<div class="course-label hidden">
																	<span>University Program</span>
																</div>
																<div class="course-det-para">
																	<p>This complete Digital Marketing Certification Course will help you become an expert in domains like SEO, social media, and pay-per-click. Enroll Now!</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>8 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-7 hidden">
															<div class="course-img-container">
																<img src="./assets/courses/course-5.svg" alt="Course 5">
																<span class="course-label">University Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>Post Graduate Program in Data Engineering</h5>
																</div>
																<div class="course-label hidden">
																	<span>University Program</span>
																</div>
																<div class="course-det-para">
																	<p>In collaboration with: <strong>AWS, IBM & Microsoft Azure</strong></p>
																	<p>Aligned with AWS and Azure certifications, this data engineering course will help all master crucial Data Engineering skills.</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>8 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-8 hidden">
															<div class="course-img-container">
																<img src="./assets/courses/course-1.svg" alt="Course 1">
																<span class="course-label">University Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>Caltech Coding Bootcamp</h5>
																</div>
																<div class="course-label hidden">
																	<span>University Program</span>
																</div>
																<div class="course-det-para">
																	<p>Enroll now for the Best Coding Bootcamp in Association with Caltech CTME. Master both front-end and back-end Java technologies, including Angular ,Spring Boot, MongoDB, etc.</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>6 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-9 hidden">
															<div class="course-img-container">
																<img src="./assets/courses/course-1.svg" alt="Course 1">
																<span class="course-label">University Program</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>Caltech UI/UX Bootcamp</h5>
																</div>
																<div class="course-label hidden">
																	<span>University Program</span>
																</div>
																<div class="course-det-para">
																	<p>This online UI Ux Bootcamp assists with the <strong>development</strong> of user experience and product design skills that will advance you career.</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>5 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-10 hidden">
															<div class="course-img-container">
																<img src="./assets/courses/course-10.svg" alt="Course 1">
																<span class="course-label">Course</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>AWS Developer Associate</h5>
																</div>
																<div class="course-label hidden">
																	<span>Course</span>
																</div>
																<div class="course-det-para">
																	<p>Enhance your proficiency with the Amazon <strong>Web</strong> Services (AWS) <strong>cloud</strong> platform to develop and deploy robust cloud applications with an AWS <strong>Developer</strong> Associate Certification. This ...</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>3 months</strong></span>
																</div>
															</div>
														</div>
														<div class="main-course course-11 hidden">
															<div class="course-img-container">
																<img src="./assets/courses/course-10.svg" alt="Course 1">
																<span class="course-label">Course</span>
															</div>
															<div class="course-details-cont">
																<div class="course-det-title">
																	<h5>AWS Solutions Architect</h5>
																</div>
																<div class="course-label hidden">
																	<span>Course</span>
																</div>
																<div class="course-det-para">
																	<p>AWS <strong>Solution</strong> Architect Certification is essential for every aspiring AWS-<strong>certified</strong> solutions architect. You will master AWS <strong>architectural</strong> principles and services such as IAM, VPC, EC2...</p>
																</div>
																<div class="ratings-cont">
																	<span class="rating">
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																		<i class="fa-solid fa-star"></i>
																	</span>
																	<span class="duration">Program Duration:&nbsp; <strong>3 months</strong></span>
																</div>
															</div>
														</div>
													`,
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "load-more-btn",
											},
											content:
												'<button class="primary-btn load-more">Load More</button> <div class="multiloader hidden"></div>',
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "footer-cont",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "footer-container container is-fullhd",
					},
					children: [
						{
							tag: "footer",
							attributes: {
								id: "footer",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "grid-footer",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-1",
											},
											children: [
												{
													tag: "h5",
													attributes: {
														class: "follow-us",
													},
													content: "Follow us!",
												},
												{
													tag: "p",
													attributes: {
														class: "refer",
													},
													content: "Refer and Earn",
												},
												{
													tag: "div",
													attributes: {
														class: "s-medias",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "s-media-1",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-facebook",
																			},
																		},
																	],
																},
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-square-twitter",
																			},
																		},
																	],
																},
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-youtube",
																			},
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "s-media-2",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-linkedin",
																			},
																		},
																	],
																},
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-telegram",
																			},
																		},
																	],
																},
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-brands fa-square-instagram",
																			},
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-2",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "Company",
														},
														{
															tag: "li",
															content: "About us",
														},
														{
															tag: "li",
															content: "Careers",
														},
														{
															tag: "li",
															content: "Newsroom",
														},
														{
															tag: "li",
															content: "Alumni speak",
														},
														{
															tag: "li",
															content: "Grievance redressal",
														},
														{
															tag: "li",
															content: "Contact us",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-3",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "Work with us",
														},
														{
															tag: "li",
															content: "Become an instructor",
														},
														{
															tag: "li",
															content: "Become a guest",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-4",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "Discover",
														},
														{
															tag: "li",
															content: "Skillup",
														},
														{
															tag: "li",
															content: "Skillup Sitemap",
														},
														{
															tag: "li",
															content: "Resources",
														},
														{
															tag: "li",
															content: "RSS feed",
														},
														{
															tag: "li",
															content: "City Sitemap",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-5",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "For Business",
														},
														{
															tag: "li",
															content: "Corporate Training",
														},
														{
															tag: "li",
															content: "Partners",
														},
														{
															tag: "li",
															content: "Digital Transformation",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid-foot grid-foot-6",
											},
											children: [
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															attributes: {
																class: "title",
															},
															content: "Learn On the Go!",
														},
														{
															tag: "li",
															content:
																"<span><i class='fa-brands fa-android'></i></span> Get the Android App",
														},
														{
															tag: "li",
															content:
																"<span><i class='fa-brands fa-apple'></i></span> Get the iOS App",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "trending trending-post",
									},
									children: [
										{
											tag: "p",
											attributes: {
												class: "title",
											},
											content: "Trending Post Graduate Programs",
										},
										{
											tag: "p",
											content:
												"Artificial Intelligence Course | Cloud Computing Certification Course | Full Stack Web Development Course | PG in Data Science | Product Management Certification Course | Blockchain Course | Machine Learning Course | Cyber Security Course in India | Project Management Certification Course | Lean Six Sigma Certification Course | Data Analytics Program | AI and ML Course | Business Analysis Certification Course | Data Engineering Certification Courses | Digital Marketing Certification Program",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "trending trending-master",
									},
									children: [
										{
											tag: "p",
											attributes: {
												class: "title",
											},
											content: "Trending Master Programs",
										},
										{
											tag: "p",
											content:
												"PMP Plus Certification Training Course | Data Science Certification Course | Data Analyst Course | Masters in Artificial Intelligence | Cloud Architect Certification Training Course | DevOps Engineer Certification Training Course | Digital Marketing Course | Cyber Security Expert Course | Business Analyst Course",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "trending trending-categories",
									},
									children: [
										{
											tag: "p",
											attributes: {
												class: "title",
											},
											content: "Trending Categories",
										},
										{
											tag: "p",
											content:
												"Project Management Courses | AWS Courses | IT Service and Architecture | Digital Marketing | Cyber Security Certification Courses | DevOps | AI & Machine Learning | Big Data | Business and Leadership | Software Engineering Certifications | Job Oriented Courses | MBA Courses | Technical Courses | Computer Courses | Web Development Courses | Online Certifications | Software Engineering Bootcamps | Generative AI Courses | Quality Management Courses | Agile Certifications | Cloud Computing Courses",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "trending trending-resources",
									},
									children: [
										{
											tag: "p",
											attributes: {
												class: "title",
											},
											content: "Trending Resources",
										},
										{
											tag: "p",
											content:
												"Python Tutorial | JavaScript Tutorial | Java Tutorial | Angular Tutorial | Node.js Tutorial | Docker Tutorial | Git Tutorial | Kubernetes Tutorial | Power BI Tutorial | CSS Tutorial",
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
