export const questions = {
  LSATISFY: {
    question: "In general, how satisfied are you with your life?",
    options: [
      { value: "1", label: "Very satisfied" },
      { value: "2", label: "Satisfied" },
      { value: "3", label: "Dissatisfied" },
      { value: "4", label: "Very dissatisfied" },
    ],
  },
  EMTSUPRT: {
    question: "How often do you get the social and emotional support you need?",
    options: [
      { value: "1", label: "Always" },
      { value: "2", label: "Usually" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Rarely" },
      { value: "5", label: "Never" },
    ],
  },
  SDLONELY: {
    question: "How often do you feel lonely? Is it...",
    options: [
      { value: "1", label: "Always" },
      { value: "2", label: "Usually" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Rarely" },
      { value: "5", label: "Never" },
    ],
  },
  SDHEMPLY: {
    question:
      "In the past 12 months, have you lost employment or had hours reduced?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  FOODSTMP: {
    question:
      "During the past 12 months, have you received food stamps, also called SNAP, the Supplemental Nutrition Assistance Program on an EBT card?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  SDHFOOD1: {
    question:
      "During the past 12 months how often did the food that you bought not last, and you didn’t have money to get more? Was that...",
    options: [
      { value: "1", label: "Always" },
      { value: "2", label: "Usually" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Rarely" },
      { value: "5", label: "Never" },
    ],
  },
  SDHBILLS: {
    question:
      "During the last 12 months, was there a time when you were not able to pay your mortgage, rent or utility bills?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  SDHUTILS: {
    question:
      "During the last 12 months was there a time when an electric, gas, oil, or water company threatened to shut off services?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  SDHTRNSP: {
    question:
      "During the past 12 months, has a lack of reliable transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  SDHSTRE1: {
    question:
      "Within the last 30 days, how often have you felt this kind of stress? (Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because their mind is troubled all the time.)",
    options: [
      { value: "1", label: "Always" },
      { value: "2", label: "Usually" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Rarely" },
      { value: "5", label: "Never" },
    ],
  },
  DIABETE4: {
    question:
      '(Ever told) (you had) diabetes? (If "Yes" and respondent is female, ask "Was this only when you were pregnant?" If respondent says pre-diabetes or borderline diabetes, use response code 4.)',
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "Yes, but female told only during pregnancy" },
      { value: "3", label: "No" },
      { value: "4", label: "No, pre-diabetes or borderline diabetes" },
    ],
  },
  MARITAL: {
    question: "Are you: (marital status)",
    options: [
      { value: "1", label: "Married" },
      { value: "2", label: "Divorced" },
      { value: "3", label: "Widowed" },
      { value: "4", label: "Separated" },
      { value: "5", label: "Never married" },
      { value: "6", label: "A member of an unmarried couple" },
    ],
  },
  EDUCA: {
    question: "What is the highest grade or year of school you completed?",
    options: [
      { value: "1", label: "Never attended school or only kindergarten" },
      { value: "2", label: "Grades 1 through 8 (Elementary)" },
      { value: "3", label: "Grades 9 through 11 (Some high school)" },
      { value: "4", label: "Grades 12 or GED (High school graduate)" },
      {
        value: "5",
        label: "College 1 year to 3 years (Some college or technical school)",
      },
      { value: "6", label: "College 4 years or more (College graduate)" },
    ],
  },
  RENTHOM1: {
    question: "Do you own or rent your home?",
    options: [
      { value: "1", label: "Own" },
      { value: "2", label: "Rent" },
      { value: "3", label: "Other arrangement" },
    ],
  },
  CPDEMO1C: {
    question: "How many cell phones do you have for your personal use?",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "Six or more" },
      { value: "8", label: "None" },
    ],
  },
  VETERAN3: {
    question:
      "Have you ever served on active duty in the United States Armed Forces, either in the regular military or in a National Guard or military reserve unit?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  EMPLOY1: {
    question: "Are you currently…?",
    options: [
      { value: "1", label: "Employed for wages" },
      { value: "2", label: "Self-employed" },
      { value: "3", label: "Out of work for 1 year or more" },
      { value: "4", label: "Out of work for less than 1 year" },
      { value: "5", label: "A homemaker" },
      { value: "6", label: "A student" },
      { value: "8", label: "Unable to work" },
    ],
  },
  CHILDREN: {
    question:
      "How many children less than 18 years of age live in your household?",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      // ...repeat as needed up to value: "87"
      { value: "88", label: "None" },
    ],
  },
  INCOME3: {
    question: "Is your annual household income from all sources:",
    options: [
      { value: "1", label: "Less than $10,000" },
      { value: "2", label: "Less than $15,000 ($10,000 to < $15,000)" },
      { value: "3", label: "Less than $20,000 ($15,000 to < $20,000)" },
      { value: "4", label: "Less than $25,000 ($20,000 to < $25,000)" },
      { value: "5", label: "Less than $35,000 ($25,000 to < $35,000)" },
      { value: "6", label: "Less than $50,000 ($35,000 to < $50,000)" },
      { value: "7", label: "Less than $75,000 ($50,000 to < $75,000)" },
      { value: "8", label: "Less than $100,000 ($75,000 to < $100,000)" },
      { value: "9", label: "Less than $150,000 ($100,000 to < $150,000)" },
      { value: "10", label: "Less than $200,000 ($150,000 to < $200,000)" },
      { value: "11", label: "$200,000 or more" },
    ],
  },
  PREGNANT: {
    question: "To your knowledge, are you now pregnant?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  SMOKE100: {
    question:
      "Have you smoked at least 100 cigarettes in your entire life? [Note: 5 packs = 100 cigarettes]",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  AVEDRNK3: {
    question:
      "During the past 30 days, on the days when you drank, about how many drinks did you drink on the average?",
    options: [
      { value: "1", label: "1 drink" },
      { value: "2", label: "2 drinks" },
      { value: "3", label: "3 drinks" },
      // Repeat up to value: "76" for each drink count
      { value: "88", label: "None" },
    ],
  },
  USENOW3: {
    question:
      "Do you currently use chewing tobacco, snuff, or snus every day, some days, or not at all?",
    options: [
      { value: "1", label: "Every day" },
      { value: "2", label: "Some days" },
      { value: "3", label: "Not at all" },
    ],
  },
  ACEDEPRS: {
    question:
      "Did you live with anyone who was depressed, mentally ill, or suicidal?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  BIRTHSEX: {
    question: "What was your sex at birth? Was it male or female?",
    options: [
      { value: "1", label: "Male" },
      { value: "2", label: "Female" },
    ],
  },
  SOFEMALE: {
    question:
      "Which of the following best represents how you think of yourself?",
    options: [
      { value: "1", label: "Lesbian or Gay" },
      { value: "2", label: "Straight, that is, not gay" },
      { value: "3", label: "Bisexual" },
      { value: "4", label: "Something else" },
    ],
  },
  TRNSGNDR: {
    question:
      'Do you consider yourself to be transgender? (If yes, ask "Do you consider yourself to be male-to-female, female-to-male, or gender non-conforming?)',
    options: [
      { value: "1", label: "Yes, Transgender, male-to-female" },
      { value: "2", label: "Yes, Transgender, female-to-male" },
      { value: "3", label: "Yes, Transgender, gender non-conforming" },
      { value: "4", label: "No" },
    ],
  },
  ACEDRINK: {
    question:
      "Did you live with anyone who was a problem drinker or alcoholic?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  ACEDRUGS: {
    question:
      "Did you live with anyone who used illegal street drugs or who abused prescription medications?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  ACEDIVRC: {
    question: "Were your parents separated or divorced?",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "8", label: "Parents not married" },
    ],
  },
  QSTLANG: {
    question: "Language identifier",
    options: [
      { value: "1", label: "English" },
      { value: "2", label: "Spanish" },
      { value: "3", label: "Other" },
    ],
  },
  _URBSTAT: {
    question: "Urban/Rural Status",
    options: [
      { value: "1", label: "Urban counties" },
      { value: "2", label: "Rural counties" },
    ],
  },
  _HLTHPL1: {
    question: "Do you have any health insurance?",
    options: [
      { value: "1", label: "Have some form of insurance" },
      { value: "2", label: "Do not have some form of insurance" },
      {
        value: "9",
        label: "Don’t know, refused, or missing insurance response",
      },
    ],
  },
};
