


var employees = [
  {"team": "Alicic", "name": "Alen Helac" , "years": [
  {"num": "2017","monthsYear": [
  {"available": [ 4.0,  5.0,  5.0,  5.0, 4.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 3.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 3.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 3.5] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 4.0, 0.0, 1.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 1.0, 5.0, 1.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  1.0, 5.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 4.0, 0.0, 4.0, 0.0] }]
  },
  {"available": [ 0.0,  0.0,  0.0,  0.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0, 5.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 5.0, 1.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0,1.0] }]
  },
  {"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 4.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 3.0,  0.0, 1.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 3.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 4.0, 2.0, 2.0, 1.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0,0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 0.0,  0.0,  0.0,  0.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  }
]}  ]  , "sumPerMonth": []},

{"team": "Alicic", "name": "Alicic Adnan" ,  "years": [
{"num": "2017","monthsYear": [
{"available": [ 4.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 5.0] }]
},
{"available": [ 3.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 3.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 3.5] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  1.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 3.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 5.0, 2.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0, 5,0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 5.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 4.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 4.5, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0,1.0] }]
},
{"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 5.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
}
]}  ]  , "sumPerMonth": []},

{"team": "Alicic", "name": "Anel Kalajevac" ,  "years": [
{"num": "2017","monthsYear": [
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  1.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
},
{"available": [ 3.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 3.0, 0.5, 5.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 3.5] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 2.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 4.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 4.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 5.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 1.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 2.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 1.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 3.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0,1.0] }]
},
{"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 4.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 2.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 4.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 5.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
}
]}  ] , "sumPerMonth": []},

{"team": "Alicic", "name": "Begic Midhat" ,  "years": [
{"num": "2017","monthsYear": [
{"available": [ 4.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
},
{"available": [ 0.0,  0.0,  0.0,  0.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 0.0, 0.0,  0.0,  0.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 0.0,  0.0,  0.0,  0.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 1.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
}
]}  ] , "sumPerMonth": []},

{"team": "Alicic", "name": "Colic Aldin" ,  "years": [
{"num": "2016","monthsYear": [
{"available": [ 4.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 3.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 3.0, 0.5, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 3.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 2.0, 5.0,  2.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 2.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 4.0, 4.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 4.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0,1.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  2.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 2.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 3.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
}
]}  ] , "sumPerMonth": []},

{"team": "Alicic", "name": "Emir Alicic" ,  "years": [
{"num": "2015","monthsYear": [
{"available": [ 4.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 3.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 3.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 3.5] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 3.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0,1.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 1.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0, 0.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0, 0.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
}
]}  ]  , "sumPerMonth": []},

{"team": "Alicic", "name": "Hasanhodzic Haris" , "years": [
{"num": "2017","monthsYear": [
{"available": [ 4.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0, 0.0] }]
},
{"available": [ 3.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 3.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 3.5] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 3.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0,1.0] }]
},
{"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 2.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
}
]}  ]  , "sumPerMonth": []},

{"team": "Alicic", "name": "Mihailo Sibonjic" ,  "years": [
{"num": "2016","monthsYear": [
{"available": [ 4.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 3.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 3.0, 0.5, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 3.5, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 4.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0,1.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
}
]}  ] , "sumPerMonth": []},

{"team": "Absenger", "name": "Wiliam Klaus" , "years": [
{"num": "2017","monthsYear": [
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  1.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 0.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 3.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 3.0, 0.5, 5.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 3.5] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 2.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 4.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 4.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 5.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 0.5] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 1.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 2.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 1.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 3.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0,1.0] }]
  },
  {"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 4.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 2.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 4.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 5.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  }
]}  ]  , "sumPerMonth": []},

{"team": "Burscher", "name": "Alyson Klaus" , "years": [
{"num": "2017","monthsYear": [
{"available": [ 5.0,  5.0,  5.0,  5.0, 4.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 2.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 2.0, 0.0, 2.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
},
{"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
},
{"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
}
]}  ]   , "sumPerMonth": []},

{"team": "Faustner", "name": "Barny Auer" , "years": [
{"num": "2017","monthsYear": [
  {"available": [ 5.0,  5.0,  5.0,  5.0, 4.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 2.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 2.0, 0.0, 2.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
  },
  {"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  }
]}  ]  , "sumPerMonth": []},

{"team": "Konrad", "name": "Freddi Schneider" ,"years": [
{"num": "2017","monthsYear": [
  {"available": [ 5.0,  5.0,  5.0,  5.0, 4.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 2.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 2.0, 0.0, 2.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
  },
  {"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  }
]}  ]  , "sumPerMonth": []},


{"team": "Krenn", "name": "Hally Klein" , "years": [
{"num": "2017","monthsYear": [
  {"available": [ 5.0,  5.0,  5.0,  5.0, 4.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 2.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 2.0, 0.0, 2.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
  },
  {"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  }
]}  ]  , "sumPerMonth": []},

{"team": "Lang", "name": "Lewy Wolf" , "years": [
{"num": "2017","monthsYear": [
  {"available": [ 5.0,  5.0,  5.0,  5.0, 4.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.5, 0.0,  0.0, 2.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 3.0, 2.0, 0.0, 2.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  1.5, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.5, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0,  0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 4.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  4.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [2.0, 0.0, 0.0,  0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 2.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 1.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 1.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0, 0.0] } ,{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 5.0] }]
  },
  {"available": [ 5.0,  5.0,  4.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 3.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 5.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0, 5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0, 0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 4.0, 0.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 1.0, 0.0, 0.0, 0.0] },{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0, 0.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 0.0, 0.0, 0.0,  0.5] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] },{"name": "CHANGE II Certus ITM/FP", "projectWeeks": [ 0.0, 3.0, 0.0, 0.0] },  {"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] }]
  },
  {"available": [ 5.0,  5.0,  5.0,  5.0], "projectsMonth": [{"name": "Certus neue Beauftragungen", "projectWeeks": [ 5.0, 0.0, 0.0,  0.0] },{"name": "CHANGE Certus ITM/FP", "projectWeeks": [ 0.0, 2.0, 0.0, 1.0] },{"name": "PNOC fur Trucks", "projectWeeks": [ 0.0, 0.0, 0.0, 1.0] } ,{"name": "ctime Einshculung", "projectWeeks": [ 0.0, 0.0, 0.0, 2.0] },{"name": "Teammgmt, Akquise, Schulung etc", "projectWeeks": [ 0.0, 0.0, 0.0, 0.0] }]
  }
]}  ]  , "sumPerMonth": []},
  ];
