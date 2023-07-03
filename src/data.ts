type Data = {
  word: string;
  description: string[];
  sentences: string[];
  checked?: boolean;
  error?: boolean;
};

export const vocabularies: Data[] = [
  {
    word: 'comprise',
    description: [
      'to have things or people as parts or members',
      'to consist of',
    ],
    sentences: [
      'The committee comprises experts from various fields.',
      'The collection comprises 100 rare books.',
      'The team is comprised of talented individuals from different backgrounds.',
      'The course comprises both theory and practical components.',
      'The United States comprises 50 states and several territories.',
    ],
  },
  {
    word: 'denomination',
    description: [
      'a religious group that has slightly different beliefs from other groups that share the same religion',
      'a unit of value, especially of money',
    ],
    sentences: [
      'The church is open to people of all religious denominations.',
      'The currency of the country is available in different denominations, such as $1, $5, $10, and $20 bills.',
      'The school has students from various religious denominations, including Christianity, Islam, and Hinduism.',
      'The coin machine at the bank accepts coins of different denominations.',
    ],
  },
  {
    word: 'diplomatic',
    description: [
      'involving the management of relationships between countries',
      'acting in a way that does not cause offence',
    ],
    sentences: [
      'Surely a diplomatic solution is preferable to war.',
      "It's a new country, hoping for diplomatic recognition from the international community.",
      'The governments have broken off diplomatic relations.',
      'All diplomatic attempts at a peaceful solution to the crisis have been fruitless.',
    ],
  },
  {
    word: 'complement',
    description: [
      'to make something else seem better or more attractive when combining with it',
      '',
    ],
    sentences: [
      'Strawberries and cream complement each other perfectly.',
      'The music complements her voice perfectly.',
      'She used photographs to complement the text of the news story.',
    ],
  },
  {
    word: 'disperse',
    description: [
      'to spread across or move away over a large area, or to make something do this',
      'to scatter or move away over a large area, or to cause this to happen',
    ],
    sentences: [
      'When the rain came down the crowds started to disperse.',
      'Police dispersed the crowd that had gathered.',
      'It took several hours for the crowd to disperse.',
    ],
  },
  {
    word: 'disseminate',
    description: [
      'to spread or give out something, especially news, information, ideas, etc., to a lot of people',
    ],
    sentences: [
      'The organization aims to disseminate information about environmental conservation to raise awareness.',
      'The professor published a research paper to disseminate his findings to the scientific community.',
      'The news agency has a wide network to disseminate news to various media outlets.',
      'The government launched a campaign to disseminate public health guidelines during the pandemic.',
    ],
  },
  {
    word: 'dissension',
    description: [
      'arguments and disagreement, especially in an organization, group, political party, etc',
      'strong disagreement, esp. within an organization',
    ],
    sentences: [
      'The heated debate among the committee members resulted in deep dissension and divided opinions.',
      'The political party faced internal dissension over key policy decisions.',
      "The team's lack of communication led to dissension and conflicts among the members.",
      'The board meeting was marked by dissension as different board members expressed opposing viewpoints.',
    ],
  },
  {
    word: 'dramatic',
    description: [
      'very sudden or noticeable, or full of action and excitement',
      'talking or behaving in a way that makes something seem much worse, more serious, more frightening, etc. than it really is',
    ],
    sentences: [
      'We watched scenes of the dramatic rescue on the news.',
      'It may sound dramatic, but I felt like my life was over.',
    ],
  },
  {
    word: 'efficiency',
    description: [
      'the quality of achieving the largest amount of useful work using as little energy, fuel, effort, etc. as possible',
      'the quality of working well in an organized way, without wasting time or energy',
    ],
    sentences: [
      'The company says it wants to improve working conditions, increase efficiency, and generally make the more profitable.',
      'She gets through her work with speed and efficiency.',
      'What is so impressive about their society is the efficiency of the public services.',
    ],
  },
  {
    word: 'elaborate',
    description: [
      'containing a lot of careful detail or many detailed parts',
      'to add more information to or explain something that you have said',
    ],
    sentences: [
      "He came out with such an elaborate excuse that I didn't quite believe him.",
      'They had created elaborate computer programs to run the system.',
      "They're making the most elaborate preparations for the wedding.",
    ],
  },
  {
    word: 'expenditure (c2)',
    description: ['the total amount of money that a government or person spends', 'the total amount of money that an organization or person spends'],
    sentences: ['It''s part of a drive to cut government expenditure.', 'The government\'s annual expenditure on arms has been reduced.', ' The company\'s expenditure on marketing increased significantly last year.', ],
  },
  {
    word: 'fruitful (c1)',
    description: ['producing good results',  ],
    sentences: [
    'It was a most fruitful discussion, with both sides agreeing to adopt a common policy.', 
    'After months of hard work, the team\'s collaboration resulted in a fruitful outcome.', 
   
     ],
  },
  {
    word: 'hatred (c1)',
    description: [`an extremely strong feeling of dislike`, `__`],
     sentences: [
    `She gave me a look of intense hatred.`, 
    `His relationship with his mother left him with a psychotic hatred of women.`, 
     `He has an extreme hatred of taxes and tolls.`,
       ],
  },
  {
    word: 'incompetent (n, adj)',
    description: [`not having the ability to do something as it should be done`, `someone who does not have the ability or skill to do something as it should be done`],
     sentences: [
    `an incompetent teacher/doctor`, 
    `He has described the government as corrupt and incompetent.`, 
    `The company had to replace the incompetent with someone more capable to handle the project.`,
     `The team suffered from the incompetence of its members, resulting in delays and errors.`,
     ],
  },
  {
    word: 'indemnity',
    description: [`protection against possible damage or loss, especially a promise of payment, or the money paid if there is such damage or loss`, ],
     sentences: [
    `The insurance policy provides indemnity to cover any losses or damages incurred during the specified period.`, 
    `The contract included a clause that granted indemnity to the company against any legal claims arising from the use of their products.`, 
    `The settlement agreement required the defendant to provide financial indemnity to the plaintiff for the harm caused.`,
     ],
  },
  {
    word: 'inscrutable',
    description: [`not showing emotions or thoughts and therefore very difficult to understand or get to know`, `very difficult to understand or get to know`],
     sentences: [
    `an inscrutable smile`, 
    `He believes that a certain portion of life must remain inscrutable.`, 
    `an inscrutable face/expression/smile`,
     ],
  },
  {
    word: 'mislead (c1)',
    description: [`to cause someone to believe something that is not true`, `__`],
     sentences: [
    `He has admitted misleading the police about his movements on the night of the murder.`, 
    `We’re not misleading people, and we’re not pretending to be something we’re not.`, 
     ],
  },
  {
    word: 'turnover (c2)',
    description: [`the rate at which employees leave a company and are replaced`, `the amount of money that a company gets from sales during a particular period`],
     sentences: [
    `The company has a staff turnover of around 12% a year.`, 
    `Group turnover rose 2% in the period, compared with last year.`, 
    `The company reported a €500,000 loss on turnover of €4.5 million.`,
     ],
  },
  {
    word: 'accommodating',
    description: [`used to describe a person who is eager or willing to help other people, for example by changing his or her plans`, `eager or willing to give what is needed to someone`],
     sentences: [
    `The hotel staff was incredibly accommodating, ensuring all our special requests were met.`, 
    `She was known for her accommodating nature, always willing to go the extra mile to help others.`, 
    `The teacher was accommodating to the students' different learning styles, providing various resources and approaches.`,
     `The restaurant had a diverse menu, accommodating different dietary preferences and restrictions.`,
     `The company implemented flexible work hours, accommodating employees' personal needs and schedules.`,
     `__`
     ],
  },
  {
    word: 'accordingly',
    description: [
    `in a way that is suitable or right for the situation`, 
    `in a way that suits the situation`
    ],
     sentences: [
    `The weather forecast predicted heavy rain, and accordingly, we packed umbrellas and raincoats.`, 
    `She studied diligently for the exam and accordingly, she earned the highest grade in the class.`, 
    `The project timeline was adjusted accordingly to account for unexpected delays.`,
     `The team received positive feedback from the client, and accordingly, they celebrated their success.`,
     `She's an expert in her field, and is paid accordingly.`
     ],
  },
  {
    word: 'accusation',
    description: [
    `a statement saying that someone has done something morally wrong, illegal, or unkind, or the fact of accusing someone`
    ],
     sentences: [
    `The politician vehemently denied the corruption accusations leveled against him.`, 
    `She was shocked and hurt by the false accusation made by her closest friend.`, 
    `The police investigated the murder accusation and gathered evidence to support their case.`,
     `The company faced legal repercussions due to the accusation of trademark infringement.`,
     `The athlete faced severe consequences after a doping accusation tarnished their reputation.`,
     ],
  },
  {
    word: 'ache',
    description: [
    `a continuous pain that is unpleasant but not very strong`, 
    `(v) to have a continuous pain that is unpleasant but not very strong`
    ],
     sentences: [
    `After running a marathon, her muscles ached for days.`, 
    `He complained of a persistent headache and aching joints.`, 
    `The dentist identified a cavity in her tooth as the cause of the toothache.`,
     `Long hours of sitting in front of the computer made his back ache.`,
     `The intense workout left her with sore muscles that ached with every movement.`,
     `My head/tooth/back aches.`
     ],
  },
  {
    word: 'adapt',
    description: [
    `to change, or to change something, to suit different conditions or uses`, 
    `to change your ideas or behaviour to make them suitable for a new situation`
    ],
     sentences: [
    `The company had to adapt its marketing strategy to target a younger demographic.`, 
    `Living in a foreign country, he had to adapt to a new culture and language.`, 
    `The plants in the desert have adapted to survive in extreme temperatures and scarce water supply.`,
     `The software developer had to adapt quickly to new programming languages to stay relevant in the industry.`,
     `The book was adapted into a successful movie, capturing the essence of the original story.`,
     ],
  },
  {
    word: 'adequate',
    description: [
    `(b2) enough or satisfactory for a particular purpose`, 
    ],
     sentences: [
    `The hotel room had all the necessary amenities, providing an adequate level of comfort for the guests.`, 
    `She felt confident that her qualifications were adequate for the job position she applied for.`, 
    `The team had adequate time to prepare for the presentation and deliver a polished performance.`,
     `The emergency supplies were deemed adequate to sustain the community during a natural disaster.`,
     `The apartment's storage space was not adequate for all their belongings, so they had to rent a storage unit.`,
     ],
  },
  {
    word: 'adopt',
    description: [
    `(b2) to accept or start to use something new`
    ],
     sentences: [
    `After years of longing for a child, they decided to adopt a baby from an orphanage.`, 
    `The family adopted a rescue dog and gave it a loving home.`, 
    `The government implemented policies to streamline the adoption process and encourage more families to adopt.`,
     `She felt a strong connection with the stray kitten and made the decision to adopt it.`,
     `The couple faced many challenges during the adoption process, but their perseverance paid off when they finally welcomed their child into their family.`,
     `__`
     ],
  },
  // No has image
  {
    word: 'abandon',
    description: [
    `(b2) to leave a place, thing, or person, usually for ever`, 
    `(c1) to stop doing an activity before you have finished it`
    ],
     sentences: [
    `The shipwrecked sailors were forced to abandon their sinking vessel and swim to the nearest island.`, 
    `The abandoned building stood as a haunting reminder of the town's past prosperity.`, 
    `He couldn't bear the thought of abandoning his lifelong dream, so he persevered despite the challenges.`,
    `The stray kitten was abandoned by its owner and left to fend for itself on the streets.`,
     ],
  },
  {
    word: 'abide',
    description: [
    `to live or stay somewhere`, 
    `If you can't ___ someone or something, you dislike them very much`
    ],
     sentences: [
    `As a responsible citizen, it is important to abide by the laws of the land.`, 
    `The team made a pact to abide by the coach's instructions and play as a unified unit.`, 
    `Despite their differences, they agreed to abide by the decision of the arbitrator.`,
    `The students were expected to abide by the school's code of conduct.`,
     ],
  },
  {
    word: 'absent',
    description: [
    `not in the place where you are expected to be, especially at school or work`, 
    `not existing`
    ],
     sentences: [
    `She was absent from work due to a severe illness and had to take a few days off to recover.`, 
    `The teacher noticed that one of her students was absent from class and made a note to check on their well-being.`, 
    `The absent-minded professor often forgot where he had left his belongings.`,
    `Her mind was absent during the meeting as she was preoccupied with personal matters.`,
     ],
  },
  {
    word: 'abundant',
    description: [
    `more than enough`, 
    `more than enough; a lot of`
    ],
     sentences: [
    `The lush tropical rainforest was home to abundant wildlife and plant species.`, 
    `The farmer's market offered an abundant variety of fresh fruits and vegetables.`, 
    `The wealthy neighborhood was known for its abundant mansions and luxurious estates.`,
    `After the rainfall, the fields were covered with abundant crops ready for harvest.`,
     ],
  },
  {
    word: 'accelerate',
    description: [
    `(c2) When a vehicle or its driver accelerates, the speed of the vehicle increases`, 
    `(c2) to happen or make something happen sooner or faster`
    ],
     sentences: [
    `The car accelerated quickly as it merged onto the highway, swiftly reaching the speed limit.`, 
    `The company implemented new strategies to accelerate the production process and meet customer demands.`, 
    `The student took additional courses to accelerate their progress and graduate early.`,
    `The research findings accelerated the development of new treatments for the disease.`,
     ],
  },
  {
    word: 'accidentally',
    description: [
    `by chance or by mistake`, 
    ],
     sentences: [
    `She accidentally spilled coffee on her favorite shirt while rushing to catch the bus.`, 
    `He accidentally deleted an important file from his computer and had to retrieve it from the backup.`, 
    `The child accidentally knocked over a vase, causing it to shatter into pieces.`,
    `The chef accidentally added too much salt to the dish, altering its taste.`,
     ],
  },
  {
    word: 'adversely',
    description: [
    `(adv) in a way that has a negative or harmful effect`, 
    `(adv) in a way that is harmful or likely to cause problem`
    ],
     sentences: [
    `The economic recession adversely affected the employment rate, causing many people to lose their jobs.`, 
    `The heavy rainstorm adversely impacted the outdoor event, forcing organizers to cancel it.`, 
    `Lack of sleep can adversely affect your cognitive function and overall health.`,
    `The negative publicity from the scandal adversely impacted the company's reputation.`,
    `A lot of companies have been adversely affected by the recession`,
     ],
  },
  {
    word: 'advisable',
    description: [
    `If something is ___, it will avoid problems if you do it`, 
    ],
     sentences: [
    `It is advisable to wear sunscreen to protect your skin from harmful UV rays.`, 
    `Before making any major financial decisions, it is advisable to seek advice from a professional.`, 
    `It is advisable to bring a jacket as the weather forecast predicts cooler temperatures in the evening.`,
    `Given the circumstances, it is advisable to take a break and prioritize self-care.`,
     ],
  },
  {
    word: 'afford',
    description: [
    `to allow someone to have something pleasant or necessary`, 
    ],
     sentences: [
    `They couldn't afford to buy a new car, so they opted for a used one instead.`, 
    `She worked multiple jobs to afford her tuition fees and cover living expenses.`, 
    `The extravagant vacation was beyond their budget, so they decided to plan a more affordable trip.`,
    `With their recent pay raise, they could now afford to upgrade their living arrangements.`,
     ],
  },
  {
    word: 'allege',
    description: [
    `(c2) to say that someone has done something illegal or wrong without giving proof`, 
    `to accuse someone of something`
    ],
     sentences: [
    `The witness alleged that they saw the defendant leaving the scene of the crime.`, 
    `The news article alleged corruption within the government, sparking a public outcry.`, 
    `The employee alleged workplace discrimination and filed a formal complaint.`,
    `The prosecution alleged that the suspect had planned the crime meticulously.`,
     ],
  },
  {
    word: 'alleged',
    description: [
    `(adj) said or thought by some people to be the stated bad or illegal thing, although you have no proof`, 
    ],
     sentences: [
    `The alleged thief was apprehended by the police based on eyewitness accounts.`, 
    `The alleged scandal rocked the political landscape, leading to widespread public scrutiny.`, 
    `The alleged cheating incident in the exam prompted an investigation by the school authorities.`,
    `The alleged abuse claims against the celebrity were vehemently denied by their legal team.`,
     ],
  },
  {
    word: 'allude_to_someone-something',
    description: [
    `to mention someone or something without talking about him, her, or it directly`, 
    ],
     sentences: [
    `During the conversation, she cleverly alluded to her upcoming surprise party without giving away the details.`, 
    `The professor's lecture briefly alluded to the historical context of the novel.`, 
    `In his speech, the politician skillfully alluded to the challenges the country was facing without directly addressing them.`,
    `The painting's symbolism subtly alluded to the artist's personal struggles.`,
     ],
  },
  {
    word: 'alter',
    description: [
    `to change something, usually slightly, or to cause the characteristics of something to change`, 
    `to change the size of clothes so that they fit better`
    ],
     sentences: [
    `She decided to alter her hairstyle and dyed her hair a vibrant shade of blue.`, 
    `The tailor was asked to alter the dress to fit the customer's measurements.`, 
    `The unexpected turn of events forced them to alter their travel plans.`,
    `The company had to alter its marketing strategy to target a younger demographic.`,
     ],
  },
  {
    word: 'ambitious',
    description: [
    `having a strong wish to be successful, powerful, or rich`, 
    `having a strong desire for success, achievement, power, or wealth`
    ],
     sentences: [
    `He has always been an ambitious individual, constantly setting high goals for himself.`, 
    `The ambitious project aimed to revolutionize renewable energy production.`, 
    `The young entrepreneur had ambitious plans to expand her startup globally.`,
    `Despite facing many obstacles, she remained ambitious and pursued her dreams relentlessly.`,
     ],
  },
  {
    word: 'ameliorate',
    description: [
    `to make a bad or unpleasant situation better`, 
    ],
     sentences: [
    `The new government policies were designed to ameliorate the living conditions of low-income families.`, 
    `The organization launched a campaign to ameliorate the effects of climate change through sustainable practices.`, 
    `The doctor prescribed medication to ameliorate the patient's chronic pain.`,
    `The implementation of new technology helped ameliorate the efficiency of the manufacturing process.`,
     ],
  },
  {
    word: 'an_arrival_date_of_no_later_than',
    description: [
    `the fact of arriving somewhere`, 
    ],
     sentences: [
    `The shipping company guaranteed an arrival date of no later than July 10th for the package.`, 
    `The contract specified an arrival date of no later than the end of the month for the equipment delivery.`, 
    `The airline informed passengers that their flights would arrive at their destinations no later than midnight.`,
    `The tour company promised an arrival date of no later than noon for the group at the hotel.`,
  },
  {
    word: 'ancient',
    description: [
    `of or from a long time ago, having lasted for a very long time`, 
    `coming from a time in the past`
    ],
     sentences: [
    `The archaeologists discovered ancient artifacts buried deep beneath the ruins.`, 
    `The ancient civilization left behind remarkable architectural structures that still stand today.`, 
    `The historian devoted years of research to unraveling the mysteries of the ancient civilization.`,
    `The ancient text provided valuable insights into the customs and beliefs of the time.`,
     ],
  },
  {
    word: 'annoyed',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She was annoyed by the constant noise coming from the construction site next to her apartment.`, 
    `His constant interruptions during the meeting left his colleagues feeling annoyed and frustrated.`, 
    `The long wait at the restaurant annoyed the hungry customers.`,
    `I get annoyed when people don't respect personal boundaries.`,
     ],
  },
  {
    word: 'anticipate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The team eagerly anticipated the release of the new product.`, 
    `She anticipated that there might be traffic during rush hour, so she left early for her appointment.`, 
    `The students anxiously anticipated the announcement of the exam results.`,
    `We anticipate a successful outcome for the project based on the progress made so far.`,
    `__`,
     ],
  },
  {
    word: 'anxious',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He felt anxious before giving a presentation in front of a large audience.`, 
    `She was anxious about the outcome of the job interview.`, 
    `The anxious child clung to their parent's hand on the first day of school.`,
    `The approaching deadline made her feel increasingly anxious.`,
     ],
  },
  {
    word: 'anxiously',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She paced back and forth, anxiously waiting for the test results.`, 
    `He checked his phone anxiously, hoping for a response to his important message.`, 
    `The team members glanced at each other anxiously during the intense moments of the game.`,
    `She watched the clock anxiously, worried that she might be late for the appointment.`,
     ],
  },
  {
    word: 'apparent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It was apparent from his body language that he was upset.`, 
    `The apparent solution to the problem turned out to be more complicated than expected.`, 
    `The student's progress was apparent in their improved test scores.`,
    `The apparent lack of interest in the topic made the presenter adjust their approach.`,
     ],
  },
  {
    word: 'appetite',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After a long hike, she had a ravenous appetite and devoured a large meal.`, 
    `The tantalizing aroma from the kitchen whetted their appetite for the upcoming dinner.`, 
    `The flu left him with a diminished appetite, and he struggled to eat.`,
    `The restaurant's extensive menu caters to different tastes and appetites.`,
    `__`,
     ],
  },
  {
    word: 'apprehension',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She felt a sense of apprehension before boarding the roller coaster.`, 
    `The driver's reckless behavior caused apprehension among the passengers.`, 
    `The first day at a new job is often filled with apprehension and nerves.`,
    `The dark clouds in the sky filled them with apprehension of an impending storm.`,
    `__`,
     ],
  },
  {
    word: 'apprehensive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She was apprehensive about flying for the first time, as she had a fear of heights.`, 
    `The student was apprehensive about the upcoming exam, unsure if they had studied enough.`, 
    `He was apprehensive about the outcome of the important meeting with his boss.`,
    `The team felt apprehensive about the challenging project, unsure if they could meet the deadlines.`,
    `__`,
     ],
  },
  {
    word: 'apprentice',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He started his career as an apprentice in a renowned woodworking studio.`, 
    `The chef took on an apprentice to pass down their culinary expertise.`, 
    `The young artist eagerly accepted an apprenticeship with a well-known painter.`,
    `The company implemented an apprentice program to provide opportunities for aspiring professionals.`,
    `__`,
     ],
  },
  {
    word: 'appropriate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He chose an appropriate outfit for the formal event.`, 
    `The teacher provided appropriate resources to support the students' learning.`, 
    `It is important to use appropriate language when addressing a diverse audience.`,
    `The committee decided to allocate an appropriate budget for the project.`,
    `__`,
     ],
  },
  {
    word: 'arouse',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The beautiful melody of the music aroused feelings of nostalgia within her.`, 
    `The controversial speech by the politician aroused a strong reaction from the crowd.`, 
    `The artist's thought-provoking artwork aimed to arouse discussions about societal issues.`,
    `The thrilling movie plotline successfully aroused the audience's curiosity.`,
    `__`,
     ],
  },
  {
    word: 'arrangement',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The florist created a stunning floral arrangement for the wedding reception.`, 
    `The musician composed a new arrangement of a classic song.`, 
    `The team worked together to make the seating arrangement for the conference.`,
    `The couple made an arrangement with their neighbors to water their plants while they were on vacatio`,
    `__`,
     ],
  },
  {
    word: 'arrive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The train is scheduled to arrive at the station in ten minutes.`, 
    `We should arrive at the airport at least two hours before the flight.`, 
    `The delivery truck finally arrived with the long-awaited package.`,
    `She was excited to arrive at her dream destination after a long journey.`,
    `__`,
     ],
  },
  {
    word: 'ascertain',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The investigator conducted interviews to ascertain the truth behind the crime.`, 
    `He double-checked the information to ascertain its accuracy.`, 
    `The doctor ordered several tests to ascertain the cause of the patient's symptoms.`,
    `The company conducted market research to ascertain customer preferences.`,
    `__`,
     ],
  },
  {
    word: 'aspiring',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She is an aspiring singer who dreams of performing on big stages.`, 
    `The workshop was attended by aspiring writers eager to improve their skills.`, 
    `The young athlete trained relentlessly, driven by their aspiring goal of winning a championship.`,
    `The mentoring program was designed to support aspiring entrepreneurs in starting their own businesses.`,
    `__`,
     ],
  },
  {
    word: 'assay',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The scientist conducted an assay to determine the chemical composition of the substance.`, 
    `The laboratory performed an assay to test the efficacy of the new drug.`, 
    `The company commissioned an assay of the mineral deposits in the area.`,
    `The jeweler used an assay to verify the authenticity of the diamond`,
    `__`,
     ],
  },
  {
    word: 'assemble_manufacture',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The workers assembled the furniture according to the instructions provided.`, 
    `The company manufactures high-quality electronics for global distribution.`, 
    `The automotive factory assembled cars on a large scale.`,
    `The company decided to manufacture its products locally to support the local economy.`,
    `__`,
     ],
  },
  {
    word: 'associated',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The brand is strongly associated with luxury and elegance.`, 
    `He is closely associated with the charitable organization and actively participates in their events.`, 
    `The new policy is associated with improved efficiency and productivity.`,
    `The disease is commonly associated with exposure to certain environmental factors.`,
    `__`,
     ],
  },
  {
    word: 'attain',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She worked hard to attain her dream of becoming a doctor.`, 
    `The athlete trained rigorously to attain peak physical fitness for the competition.`, 
    `The company's goal was to attain a significant market share within the next year.`,
    `With dedication and perseverance, he was able to attain academic success.`,
    `__`,
     ],
  },
  {
    word: 'attainment',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Graduating from university was a significant attainment for her.`, 
    `The musician's album received critical acclaim, marking a major attainment in their career.`, 
    `The company celebrated the attainment of their sales target for the year.`,
    `The program focuses on the holistic development of students, fostering intellectual and personal attainments.`,
    `__`,
     ],
  },
  {
    word: 'avert',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The quick actions of the lifeguard helped avert a potential drowning incident at the beach.`, 
    `The driver swerved to avert a collision with a speeding car.`, 
    `The company implemented safety measures to avert workplace accidents.`,
    `The diplomat's negotiation skills were crucial in helping avert a diplomatic crisis.`,
    `__`,
     ],
  },
  {
    word: 'awful',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The storm caused awful damage to the coastal town, leaving many homes destroyed.`, 
    `The food at the restaurant was awful; it was tasteless and poorly cooked.`, 
    `She had an awful headache that made it difficult to concentrate.`,
    `The movie received awful reviews from critics and was considered a box office flop.`,
    `__`,
     ],
  },
  {
    word: 'awkward',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They had an awkward encounter when they accidentally bumped into each other at the grocery store.`, 
    `He felt awkward attending the party alone, not knowing anyone there.`, 
    `The conversation turned awkward when sensitive topics were brought up.`,
    `The student's awkward dance moves drew laughter from their classmates.`,
    `__`,
     ],
  },
  {
    word: 'be tempted',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She tried to resist, but the mouthwatering aroma of freshly baked cookies tempted her.`, 
    `He was tempted to skip the gym and stay home to watch TV instead.`, 
    `The enticing sale tempted her to buy more clothes than she needed.`,
    `The delicious cake on the dessert menu was too tempting to resist.`,
    `__`,
     ],
  },
  {
    word: 'beforehand',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She prepared the presentation slides beforehand to ensure a smooth delivery.`, 
    `They booked their flight tickets well beforehand to secure lower prices.`, 
    `He discussed the details with his team beforehand to avoid any last-minute confusion.`,
    `The party planner arranged all the decorations beforehand to save time on the day of the event.`,
    `__`,
     ],
  },
  {
    word: 'beneficial',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Regular exercise has numerous beneficial effects on overall health and well-being.`, 
    `The new software system proved to be beneficial in streamlining the company's workflow.`, 
    `Reading books is beneficial for expanding knowledge and improving vocabulary.`,
    `The mentor provided beneficial advice to help the aspiring entrepreneur succeed.`,
    `__`,
     ],
  },
  {
    word: 'berth',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The captain skillfully maneuvered the ship into its designated berth at the port.`, 
    `They reserved a berth on the overnight train to ensure a comfortable journey.`, 
    `The cruise ship had spacious cabins with ocean-view berths.`,
    `The truck driver parked the vehicle in an empty berth at the truck stop.`,
    `__`,
     ],
  },
  {
    word: 'beware',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Beware of scams that promise quick and easy money-making schemes.`, 
    `The sign at the zoo warned visitors to beware of feeding the animals.`, 
    `She received a warning from a friend to beware of a suspicious email scam.`,
    `The hiker was cautious and kept a lookout to beware of any dangerous wildlife.`,
    `__`,
     ],
  },
  {
    word: 'bizarre',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The fashion show featured models wearing bizarre and avant-garde outfits.`, 
    `The story in the book took a bizarre twist, leaving readers perplexed.`, 
    `The artist's paintings were known for their bizarre and surreal elements.`,
    `The movie's plot was filled with bizarre occurrences and unexpected events.`,
    `__`,
     ],
  },
  {
    word: 'blame',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She was quick to place blame on others without taking responsibility for her own actions.`, 
    `The investigation revealed that no one could be solely blamed for the accident.`, 
    `It's unfair to blame the entire team for the failure; everyone played their part.`,
    `The boss took the blame for the project's shortcomings, even though it was a collective effort.`,
    `__`,
     ],
  },
  {
    word: 'bond',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The siblings shared a strong bond and supported each other through thick and thin.`, 
    `The team-building activities helped foster a bond among the employees.`, 
    `The bond between the dog and its owner was evident in their deep connection.`,
    `The secret agent relied on their bond with their partner to successfully complete the mission.`,
    `__`,
     ],
  },
  {
    word: 'boost',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The new marketing campaign helped boost sales for the company.`, 
    `She drank a cup of coffee to boost her energy before the important meeting.`, 
    `The positive feedback from customers boosted the team's morale.`,
    `The government implemented policies to boost economic growth and create more jobs.`,
    `__`,
     ],
  },
  {
    word: 'booth',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They reserved a booth at the restaurant for their family gathering.`, 
    `The job fair had various booths where companies showcased their job opportunities.`, 
    `The trade show featured a booth displaying the latest technology innovations.`,
    `They set up a photo booth at the wedding to capture fun and memorable moments.`,
     ],
  },
  {
    word: 'brew',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He liked to brew his own beer as a hobby and experiment with different flavors.`, 
    `The rich aroma of freshly brewed coffee filled the café.`, 
    `The tea leaves need time to brew in hot water to release their flavors.`,
    `The chef spent hours simmering the ingredients to brew a flavorful broth.`,
     ],
  },
  {
    word: 'broadcast',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The radio station broadcasted the live coverage of the sports event.`, 
    `The news anchor prepared to broadcast the breaking news to the viewers.`, 
    `The television network decided to broadcast the award ceremony globally.`,
    `The podcast host recorded the episode to be broadcasted on various platforms.`,
     ],
  },
  {
    word: 'broaden',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Traveling broadens one's perspective by exposing them to different cultures and traditions.`, 
    `The university offers a range of elective courses to broaden students' knowledge.`, 
    `He joined a book club to broaden his reading interests and discover new authors.`,
    `The internship opportunity allowed her to broaden her professional network.`,
    `__`,
     ],
  },
  {
    word: 'bulletin',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The school posted a bulletin with important announcements and upcoming events.`, 
    `The company sent out a bulletin to all employees regarding the change in office hours.`, 
    `The community center displayed a bulletin with local news and community initiatives.`,
    `The bulletin board in the office served as a central communication hub for employees.`,
    `__`,
     ],
  },
  {
    word: 'bystander',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The bystander witnessed the accident and rushed to call for help.`, 
    `Despite the commotion, the bystanders stood by, not offering any assistance.`, 
    `The brave bystander intervened to stop the altercation and protect the victim.`,
    `The campaign aimed to raise awareness about the importance of bystander intervention in preventing bullying.`,
    `__`,
     ],
  },
  {
    word: 'cage',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The zookeeper carefully placed the new arrival, a rare bird, in its cage.`, 
    `The pet owner bought a large cage for their energetic hamster.`, 
    `The wrestler emerged from the cage victorious after a grueling match.`,
    `The animal shelter rescued a neglected dog and provided it with a safe cage to recover.`,
     ],
  },
  {
    word: 'carriage',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The horse-drawn carriage took tourists on a scenic ride through the city.`, 
    `She looked elegant as she stepped out of the luxurious carriage at the red carpet event.`, 
    `The old photographs showed people traveling in carriages during the early 1900s.`,
    `The royal wedding procession included a beautifully adorned carriage carrying the bride and groom`,
    `__`,
     ],
  },
  {
    word: 'cartridge',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The video game console required inserting a game cartridge to play.`, 
    `The hunter loaded a fresh cartridge into their rifle before heading into the woods.`, 
    `The printer ran out of ink cartridges, causing a pause in the office's printing tasks.`,
    `The archaeologists discovered ancient cartridge cases used for storing valuable documents.`,
     ],
  },
  {
    word: 'casually',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He casually strolled down the street, hands in his pockets, without a care in the world.`, 
    `She casually mentioned her upcoming vacation during a casual conversation with her colleagues.`, 
    `The dog owner casually tossed a frisbee, and the dog enthusiastically chased after it.`,
    `They chatted casually over a cup of coffee, discussing their weekend plans.`,
     ],
  },
  {
    word: 'chase',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The children ran through the park, playing a game of chase.`, 
    `The police chased the suspect through the narrow alleys, determined to apprehend them.`, 
    `The cat eagerly chased after the toy mouse, swatting at it with its paws.`,
    `She chased her dreams relentlessly, never giving up on her aspirations.`,
    `__`,
     ],
  },
  {
    word: 'choosy',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He was known for being choosy when it came to selecting his friends.`, 
    `The picky eater was choosy about the ingredients and flavors of their meals.`, 
    `The fashion designer was choosy about the fabrics and materials used in their designs.`,
    `The company had high standards and was choosy when it came to hiring new employees.`,
    `__`,
     ],
  },
  {
    word: 'cigarette butt',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The littering person carelessly dropped their cigarette butt on the ground instead of disposing of it properly.`, 
    `The environmental activist organized a campaign to raise awareness about the harmful effects of cigarette butt pollution.`, 
    `The park had designated smoking areas with designated bins for cigarette butt disposal.`,
    `She found a discarded cigarette butt and disposed of it in the appropriate container.`,
    `__`,
     ],
  },
  {
    word: 'civic center',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The civic center hosted a variety of events, including conferences, concerts, and exhibitions.`, 
    `The city council held their monthly meetings at the civic center to discuss local issues.`, 
    `The community gathered at the civic center to celebrate Independence Day with a fireworks display.`,
    `The civic center had a library, a theater, and recreational facilities for residents to enjoy.`,
    `__`,
     ],
  },
  {
    word: 'claim',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The insurance company processed her claim and provided compensation for the damage to her car.`, 
    `He made a bold claim during the debate, asserting that his proposal would solve the problem.`, 
    `The archaeologist made a groundbreaking claim about the origins of the ancient artifact.`,
    `The customer called the helpline to report a faulty product and initiate a warranty claim.`,
    `__`,
     ],
  },
  {
    word: 'clarity',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The presenter used visual aids to enhance the clarity of the information being conveyed.`, 
    `The teacher's explanations brought clarity to the complex subject matter.`, 
    `The author's writing style was admired for its clarity and ease of understanding.`,
    `The clear blue sky added to the clarity of the breathtaking view.`,
    `__`,
     ],
  },
  {
    word: 'clumsy',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He knocked over a vase with his clumsy movements.`, 
    `The toddler took clumsy steps as they were just learning to walk.`, 
    `She felt clumsy trying to dance in high heels for the first time.`,
    `The clumsy attempt to fix the broken chair only made it worse.`,
    `__`,
     ],
  },
  {
    word: 'coincide',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The meeting coincided with her birthday, so her colleagues surprised her with a celebration.`, 
    `The start of the concert coincided with the sunset, creating a magical atmosphere.`, 
    `The company's decision to launch a new product will coincide with the holiday season.`,
    `Their schedules didn't coincide, so they had a hard time finding a suitable time to meet.`,
    `__`,
     ],
  },
  {
    word: 'collate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The secretary collated all the documents and organized them in a folder.`, 
    `The researcher collated the data from multiple sources to analyze the trends.`, 
    `The librarian collated the books on the shelves according to their genres.`,
    `The project manager asked the team members to collate their findings into a comprehensive report.`,
    `__`,
     ],
  },
  {
    word: 'college',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She enrolled in a prestigious college to pursue her degree in engineering.`, 
    `The college campus was buzzing with activity during the first week of classes.`, 
    `He formed lifelong friendships while living in the college dormitory.`,
    `The college provided various extracurricular activities to enhance students' overall learning experience.`,
    `__`,
     ],
  },
  {
    word: 'commendable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Her dedication and hard work on the project were commendable.`, 
    `The student received a commendable grade for their exceptional essay.`, 
    `The company's efforts to reduce its carbon footprint were commendable.`,
    `The organization recognized her commendable contributions with an award.`,
    `__`,
     ],
  },
  {
    word: 'commensurate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The salary increase was commensurate with her years of experience and expertise.`, 
    `The size of the project required a commensurate amount of resources and manpower.`, 
    `The punishment given to the offender was commensurate with the seriousness of the crime.`,
    `The effort she put into her presentation was commensurate with the positive feedback she received.`,
    `__`,
     ],
  },
  {
    word: 'commercial',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The television aired a commercial promoting the new product.`, 
    `They rented a commercial space to open their own bakery.`, 
    `The company invested heavily in a commercial advertising campaign to boost sales.`,
    `The filmmaker's latest project was both critically acclaimed and commercially successful.`,
    `__`,
     ],
  },
  {
    word: 'comparative',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The study conducted a comparative analysis of the effectiveness of different treatments.`, 
    `She presented a comparative study of two famous novels during her literature class.`, 
    `The professor encouraged students to write a comparative essay comparing two historical events.`,
    `The comparative advantage of the product made it a popular choice in the market.`,
    `__`,
     ],
  },
  {
    word: 'compelled',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The compelling story in the book compelled readers to stay up all night to finish it.`, 
    `The evidence presented in court compelled the jury to reach a guilty verdict.`, 
    `She felt compelled to help the less fortunate and volunteered at a local shelter.`,
    `The compelling performance by the actor moved the audience to tears.`,
    `__`,
     ],
  },
  {
    word: 'compensate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company offered to compensate the customer for the inconvenience caused by the delayed delivery.`, 
    `He worked extra hours to compensate for the time he took off earlier in the week.`, 
    `The insurance policy will compensate the policyholder for any property damage.`,
    `The organization decided to compensate the employees with a bonus for their outstanding performance.`,
     ],
  },
  {
    word: 'complacent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After achieving success, she became complacent and stopped pushing herself further.`, 
    `The team's complacent attitude led to their defeat in the final match.`, 
    `Complacency can hinder personal growth and development.`,
    `The company's complacent approach to customer service resulted in a decline in customer satisfaction.`,
    `__`,
     ],
  },
  {
    word: 'complication',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The patient's condition took a turn for the worse, and complications arose during the surgery.`, 
    `The legal case became more complex with the introduction of new complications.`, 
    `Poor communication between team members added unnecessary complications to the project.`,
    `The financial complications forced them to rethink their business strategy.`,
    `__`,
     ],
  },
  {
    word: 'complimentary',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The hotel offered complimentary breakfast to all its guests.`, 
    `She received a complimentary ticket to the concert as a thank you for her support.`, 
    `The company sent a complimentary sample of their new product to select customers.`,
    `The host delivered a complimentary speech praising the hard work of the award recipients.`,
    `__`,
     ],
  },
  {
    word: 'composure',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Despite the stressful situation, she maintained her composure and handled it calmly.`, 
    `The experienced public speaker displayed confidence and composure on stage.`, 
    `It's important to keep composure during negotiations to achieve the best outcome.`,
    `The actor's composure never wavered, even during intense and emotional scenes.`,
    `__`,
     ],
  },
  {
    word: 'comprehend',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It took her a while to comprehend the complex instructions.`, 
    `The teacher used various teaching techniques to ensure all students comprehended the lesson.`,
    `The book provided a detailed explanation to help readers comprehend the scientific concepts.`,
    `The language barrier made it challenging for them to comprehend the local customs and traditions.`,
     ],
  },
  {
    word: 'comprehensive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company conducted a comprehensive market analysis before launching the new product.`, 
    `She presented a comprehensive report that covered all aspects of the project.`, 
    `The university offers a comprehensive range of courses to meet students' diverse interests.`,
    `The government implemented a comprehensive plan to address the issue of climate change.`,
    `__`,
     ],
  },
  {
    word: 'compulsory',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The course was compulsory for all first-year students.`, 
    `Wearing a seatbelt is compulsory for the safety of all passengers.`, 
    `The new law made it compulsory for businesses to adhere to stricter environmental regulations.`,
    `The school implemented compulsory community service as part of its curriculum.`,
    `__`,
     ],
  },
  {
    word: 'concede',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After a long argument, he finally conceded and admitted his mistake.`, 
    `The team decided to concede the game to their opponent, as they were clearly outmatched.`, 
    `It's difficult for him to concede a point in a debate, as he is highly competitive.`,
    `The politician refused to concede defeat, even after the election results were announced.`,
    `__`,
     ],
  },
  {
    word: 'concentrate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She found it challenging to concentrate on her studies with all the noise around her.`, 
    `The artist shut herself in her studio to concentrate on her latest masterpiece.`, 
    `He took a deep breath to clear his mind and concentrate on the task at hand.`,
    `It's important to concentrate and pay attention during the lecture to fully grasp the content.`,
    `__`,
     ],
  },
  {
    word: 'concierge',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The hotel concierge provided excellent recommendations for local restaurants and attractions.`, 
    `The concierge arranged transportation for the guests and ensured their stay was comfortable.`, 
    `The concierge at the apartment building helped residents with various requests and services.`,
    `The concierge desk was available 24/7 to assist guests with any inquiries or needs.`,
    `__`,
     ],
  },
  {
    word: 'conclusive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The DNA test results provided conclusive evidence in solving the crime.`, 
    `After months of research, they reached a conclusive conclusion about the experiment.`, 
    `The judge declared the witness's testimony as conclusive and crucial for the case.`,
    `The study's findings were conclusive, confirming the effectiveness of the new treatment.`,
    `__`,
     ],
  },
  {
    word: 'concrete',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The construction workers poured concrete to form the foundation of the building.`, 
    `She walked carefully on the concrete sidewalk to avoid tripping.`, 
    `The artist used concrete as a medium to create sculptures.`,
    `The road was repaired with new concrete to improve its durability.`,
    `__`,
     ],
  },
  {
    word: 'conducive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `A quiet and peaceful environment is conducive to studying.`, 
    `The team created a collaborative workspace that was conducive to creativity and innovation.`, 
    `The supportive and positive feedback from her peers was conducive to her personal growth.`,
    `The warm and welcoming atmosphere in the classroom was conducive to effective learning.`,
    `__`,
     ],
  },
  {
    word: 'congested',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The city's rush hour traffic caused the streets to become congested.`, 
    `The doctor's office was so congested with patients that there was a long waiting time.`, 
    `During the holiday season, airports tend to be congested with travelers.`,
    `The congested subway system made commuting a frustrating experience.`,
    `__`,
     ],
  },
  {
    word: 'conscious',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She made a conscious effort to eat healthier and exercise regularly.`, 
    `He was conscious of the impact of his words and chose them carefully.`, 
    `The company implemented eco-friendly practices to be more conscious of the environment.`,
    `She became conscious of her breathing and practiced deep breathing exercises to reduce stress.`,
    `__`,
     ],
  },
  {
    word: 'consecutive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He won the championship for three consecutive years.`, 
    `The company reported consecutive quarters of growth in their financial statements.`, 
    `The team lost five consecutive games, causing frustration among the players.`,
    `The marathon runner completed 10 consecutive marathons, setting a new record.`,
    `__`,
     ],
  },
  {
    word: 'consent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Before conducting the experiment, the participants were required to give their informed consent.`, 
    `The couple decided to get married with the consent of their families.`,
    `The company cannot use your personal information without your consent.`,
    `She asked her parents for their consent before going on the school trip.`,
     ],
  },
  {
    word: 'consequence',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The consequence of not studying for the exam was a low grade.`, 
    `His reckless behavior had serious consequences, resulting in an accident.`, 
    `The new policy had positive consequences for the company's bottom line.`,
    `The consequence of his actions led to strained relationships with his friends.`,
     ],
  },
  {
    word: 'conservative',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He holds conservative political views and supports limited government intervention.`, 
    `The company took a conservative approach to financial planning to minimize risks.`, 
    `Her conservative dress sense reflected her traditional values.`,
    `The conservative estimate for the project's completion was six months.`,
     ],
  },
  {
    word: 'conserve',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It is important to conserve water by turning off the tap when not in use.`, 
    `The organization aims to conserve natural habitats and protect endangered species.`, 
    `The artist used conservation methods to preserve and restore the aging artwork.`,
    `She decided to conserve her energy for the upcoming marathon by getting enough rest.`,
     ],
  },
  {
    word: 'consign',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company consigned their products to a local retailer for distribution.`, 
    `He consigned his old books to a secondhand bookstore.`, 
    `The art gallery consigned the painting to an auction house for sale.`,
    `The customer consigned the damaged item back to the manufacturer for repair.`,
     ],
  },
  {
    word: 'constitute',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The various ingredients constitute the recipe for a delicious meal.`, 
    `The team members constitute a diverse group with different skill sets.`, 
    `The policies and guidelines constitute the framework for the organization's operations.`,
    `The five elements of nature constitute the core philosophy of the ancient belief system.`,
    `__`,
     ],
  },
  {
    word: 'consul',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The consul provided assistance and support to citizens living abroad.`, 
    `The embassy appointed a consul to handle visa applications.`, 
    `The consul facilitated diplomatic relations between the two countries.`,
    `The consul acted as a representative of their home country in a foreign land.`,
    `__`,
     ],
  },
  {
    word: 'controversial',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The new government policy sparked a controversial debate among the citizens.`, 
    `The controversial book stirred up strong opinions and divided readers.`, 
    `The artist's controversial artwork challenged societal norms and provoked discussions.`,
    `The decision to build a new highway in the protected area was met with controversial opinions.`,
    `__`,
     ],
  },
  {
    word: 'convention',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The annual convention brings together professionals from different industries to share knowledge and network.`, 
    `The science fiction convention attracts fans from around the world.`, 
    `The political convention is where party members gather to nominate their candidates.`,
    `The convention center offers a spacious venue for hosting large-scale events and conferences.`,
    `__`,
     ],
  },
  {
    word: 'convict',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The jury found the defendant guilty and convicted him of the crime.`, 
    `The DNA evidence played a crucial role in convicting the murderer.`, 
    `The judge sentenced the convict to ten years in prison.`,
    `The lawyer worked tirelessly to prove the innocence of the wrongly convicted.`,
    `__`,
     ],
  },
  {
    word: 'correspondence',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The professor and the student exchanged emails as part of their academic correspondence.`, 
    `He kept all the letters as a record of their correspondence over the years.`, 
    `The company's customer service team promptly responded to customer correspondence.`,
    `The historian analyzed the correspondence between two influential figures to gain insights into their relationship.`,
    `__`,
     ],
  },
  {
    word: 'corridor',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The hospital has long corridors connecting different departments.`, 
    `The students lined up along the corridor, waiting for the bell to ring.`, 
    `The hotel room was located at the end of a quiet corridor, away from the noise.`,
    `The office building had a spacious corridor with several meeting rooms branching off from it.`,
    `__`,
     ],
  },
  {
    word: 'costume',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She wore a beautiful princess costume for the Halloween party.`, 
    `The actors wore elaborate costumes to portray historical characters on stage.`, 
    `The costume designer meticulously crafted unique outfits for the movie's characters.`,
    `The costume party encouraged attendees to dress up as their favorite fictional characters.`,
    `__`,
     ],
  },
  {
    word: 'courteous',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The receptionist greeted guests with a warm and courteous smile.`, 
    `It's important to be courteous and respectful to others, regardless of their background.`, 
    `He always held the door open for others as a courteous gesture.`,
    `The waiter provided excellent service, being attentive and courteous throughout the meal.`,
    `__`,
     ],
  },
  {
    word: 'crisis',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The country faced an economic crisis due to a sudden downturn in the stock market.`, 
    `The company went into crisis mode when their systems were compromised by a cyberattack.`, 
    `The government implemented emergency measures to deal with the healthcare crisis.`,
    `The crisis brought out the best in people as they came together to support and help each other.`,
    `__`,
     ],
  },
  {
    word: 'criterion',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Academic performance is one criterion for admission to the prestigious university.`, 
    `The selection committee used specific criteria to evaluate the candidates for the job.`, 
    `The movie's success was measured by various criteria, including box office revenue and critical acclaim.`,
    `The judge considered several criteria in reaching a fair and just decision.`,
    `__`,
     ],
  },
  {
    word: 'crucial',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The final play of the game was crucial for determining the winner.`, 
    `Proper time management is crucial for meeting deadlines.`, 
    `The witness's testimony played a crucial role in solving the case.`,
    `The crucial step in the experiment was the accurate measurement of the ingredients.`,
    `__`,
     ],
  },
  {
    word: 'cruel',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Animal cruelty is a serious offense that should be punished.`, 
    `The dictator ruled with a cruel and iron fist, suppressing dissent.`, 
    `Bullying is a cruel behavior that can have long-lasting effects on its victims.`,
    `The harsh and cruel conditions in the factory led to protests from workers.`,
    `__`,
     ],
  },
  {
    word: 'cruise',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They went on a romantic cruise to the Caribbean for their honeymoon.`, 
    `The cruise ship sailed smoothly through the calm waters of the ocean.`, 
    `The family enjoyed the various onboard activities during their cruise vacation.`,
    `The cruise line offered a luxury experience with gourmet dining and live entertainment.`,
    `__`,
     ],
  },
  {
    word: 'culinary',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The culinary arts program offers hands-on training in cooking and food preparation.`, 
    `He developed a passion for culinary delights after watching cooking shows.`, 
    `The restaurant is known for its culinary excellence and innovative dishes.`,
    `The culinary world is constantly evolving, with new techniques and flavors being introduced.`,
    `__`,
     ],
  },
  {
    word: 'debate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The debate focused on the pros and cons of implementing a new policy.`, 
    `Students participated in a lively debate about the effects of social media.`, 
    `The presidential candidates engaged in a heated debate on live television.`,
    `The debate club organized a tournament where teams from different schools competed.`,
    `__`,
     ],
  },
  {
    word: 'debut',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The young actress made her debut in a critically acclaimed film.`, 
    `The band's debut album quickly gained popularity among music lovers.`, 
    `The fashion designer showcased their latest collection at a prestigious fashion week debut.`,
    `The athlete's debut in the professional league was highly anticipated.`,
    `__`,
     ],
  },
  {
    word: 'deceive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He used clever tactics to deceive his opponents in the game.`, 
    `The scammer deceived unsuspecting individuals with false promises of wealth.`, 
    `She felt hurt and betrayed when she realized her friend had deceived her.`,
    `The illusionist amazed the audience with mind-bending tricks that seemed to deceive the eye`,
    `__`,
     ],
  },
  {
    word: 'dedication',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `His dedication to his studies paid off when he graduated at the top of his class.`, 
    `The athlete's dedication to training resulted in winning multiple championships.`, 
    `The teacher's dedication to her students was evident through her extra effort and support.`,
    `The nonprofit organization recognized her dedication to community service with an award.`,
    `__`,
     ],
  },
  {
    word: 'deed',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The generous philanthropist's deeds had a positive impact on the community.`, 
    `He was recognized for his heroic deeds during the rescue mission.`, 
    `The lawyer prepared the legal documents for the transfer of property deed.`,
    `The volunteer group aimed to perform acts of kindness and good deeds in their community.`,
    `__`,
     ],
  },
  {
    word: 'defect',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The manufacturer issued a recall due to a defect in the product.`, 
    `The detective found a small defect in the suspect's alibi, leading to further investigation.`, 
    `The defect in the car's engine caused it to malfunction unexpectedly.`,
    `Despite its defects, the antique clock held sentimental value for the family.`,
    `__`,
     ],
  },
  {
    word: 'defy',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The acrobat's performance seemed to defy gravity with daring stunts.`, 
    `She decided to defy her parents' expectations and pursue her own dreams.`, 
    `The revolutionary technology defied all previous limitations, opening new possibilities.`,
    `The athlete's perseverance and determination allowed him to defy the odds and achieve greatness.`,
    `__`,
     ],
  },
  {
    word: 'delicate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The fragile vase required careful handling due to its delicate nature.`, 
    `The delicate fabric of the dress required special care during washing.`, 
    `The delicate balance of the ecosystem was disrupted by human activities.`,
    `The delicate negotiations between the two countries required skilled diplomats.`,
    `__`,
     ],
  },
  {
    word: 'delighted',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She was delighted to receive an unexpected gift from her best friend.`, 
    `The children were delighted by the magician's tricks and illusions.`, 
    `The host was delighted by the positive response to their event.`,
    `The team's victory in the championship left their coach delighted and proud.`,
    `__`,
     ],
  },
  {
    word: 'delude',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The scam artist tried to delude innocent people into giving away their personal information.`, 
    `Don't delude yourself into thinking that success will come without hard work.`, 
    `His false promises were designed to delude his followers into believing in his authority.`,
    `She realized she had been deluded by his charm and deceitful tactics.`,
    `__`,
     ],
  },
  {
    word: 'demanding',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The job requires a demanding schedule and high level of commitment.`, 
    `She found the rigorous training program to be physically and mentally demanding.`, 
    `The professor set demanding standards for the research project.`,
    `Being a parent can be emotionally demanding, but also incredibly rewarding.`,
    `__`,
     ],
  },
  {
    word: 'depression',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He sought therapy to help him cope with his depression.`, 
    `Economic recession often leads to a rise in unemployment and depression.`, 
    `The loss of a loved one can trigger a deep sense of depression and grief.`,
    `Regular exercise and a healthy lifestyle can help alleviate symptoms of depression.`,
    `__`,
     ],
  },
  {
    word: 'derail',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The train was derailed due to a faulty track.`, 
    `A sudden conflict between team members threatened to derail the project.`, 
    `The scandal threatened to derail the politician's campaign.`,
    `They had to work extra hours to make up for the delay and prevent the project from derailing.`,
    `__`,
     ],
  },
  {
    word: 'deserved',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After years of hard work, she finally received the promotion she deserved.`, 
    `The team's victory was well-deserved after their consistent performance throughout the season.`, 
    `He received a standing ovation for his powerful and heartfelt performance, which was well-deserved.`,
    `The scholarship award was given to the student who had demonstrated exceptional academic achievement and deserved recognition.`,
    `__`,
     ],
  },
  {
    word: 'deteriorate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The condition of the building continued to deteriorate due to lack of maintenance.`, 
    `His health began to deteriorate after he stopped taking his medication.`, 
    `The relationship between the two countries deteriorated following a series of conflicts.`,
    `If left untreated, the patient's condition is likely to deteriorate further.`,
    `__`,
     ],
  },
  {
    word: 'detrimental',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Smoking is known to have detrimental effects on overall health.`, 
    `The company's decision to cut corners had a detrimental impact on the quality of their products.`, 
    `Lack of sleep can be detrimental to cognitive function and overall well-being.`,
    `It is important to avoid detrimental habits that can hinder personal growth and success.`,
    `__`,
     ],
  },
  {
    word: 'devote',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She decided to devote her time and energy to charitable causes.`, 
    `The writer devoted years to researching and writing their novel.`, 
    `He chose to devote himself to a career in medicine to help others.`,
    `They devoted their weekends to renovating their old house.`,
    `__`,
     ],
  },
  {
    word: 'devotion',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The couple's love and devotion to each other were evident in their long-lasting marriage.`, 
    `She showed unwavering devotion to her family, always putting their needs first.`, 
    `The fans' devotion to the band was evident in their enthusiastic support at concerts.`,
    `The monk's life was dedicated to spiritual devotion and prayer.`,
    `__`,
     ],
  },
  {
    word: 'dialogue',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The characters engaged in a deep and meaningful dialogue about the nature of love.`, 
    `The political leaders met for a dialogue to discuss possible solutions to the conflict.`, 
    `Effective communication requires open and honest dialogue between individuals.`,
    `The dialogue between the teacher and the student fostered a better understanding of the subject.`,
    `__`,
     ],
  },
  {
    word: 'digress',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The speaker tended to digress from the main topic, leading to a lengthy and confusing presentation.`, 
    `Let's not digress from the main issue at hand and focus on finding a solution.`, 
    `The author occasionally digressed to share personal anecdotes in the book.`,
    `The conversation started to digress into unrelated topics, losing its initial focus.`,
    `__`,
     ],
  },
  {
    word: 'dilemma',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She faced a dilemma when she had to choose between pursuing her dream job and staying close to her family.`, 
    `The company found itself in a financial dilemma due to unexpected market changes.`, 
    `The protagonist in the story was torn between two conflicting moral dilemmas.`,
    `Solving the environmental dilemma requires a balance between economic growth and sustainable practices.`,
    `__`,
     ],
  },
  {
    word: 'diligent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The student was diligent in her studies, always completing assignments on time and seeking additional knowledge.`, 
    `The diligent employee always went the extra mile to meet deadlines and deliver high-quality work.`, 
    `The success of the project was largely due to the diligent efforts of the team members.`,
    `The diligent research paid off when they discovered a breakthrough in their field.`,
    `__`,
     ],
  },
  {
    word: 'dimension',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `__`, 
    `__`, 
    `__`,
    `__`,
    `__`,
     ],
  },
  {
    word: 'dine',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They decided to dine at their favorite restaurant to celebrate their anniversary.`, 
    `The couple enjoyed a romantic candlelit dinner as they dined by the seaside.`, 
    `The hotel offered a variety of dining options, including a rooftop restaurant with stunning views.`,
    `She invited her friends over to dine together and catch up on their lives.`,
    `__`,
     ],
  },
  {
    word: 'disaster',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The hurricane left behind a trail of destruction and was considered a major disaster.`, 
    `The project was a disaster due to poor planning and lack of coordination.`, 
    `The company suffered a financial disaster after the stock market crash.`,
    `The firefighter's quick response and bravery prevented a potential disaster.`,
    `__`,
     ],
  },
  {
    word: 'discouraging',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Despite her initial enthusiasm, the continuous setbacks were discouraging her from pursuing her dreams.`, 
    `The negative feedback from her peers was discouraging, but she remained determined.`, 
    `The low test scores were discouraging for the students who had studied hard.`,
    `The lack of progress was discouraging, but they refused to give up.`,
    `__`,
     ],
  },
  {
    word: 'discreet',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He handled the confidential information with discretion, always being discreet about sensitive matters.`, 
    `She gave him a discreet nod, indicating that she understood his secret message.`, 
    `The hotel staff was trained to provide discreet and attentive service to their guests.`,
    `The lawyer advised her client to be discreet and avoid discussing the case with others.`,
    `__`,
     ],
  },
  {
    word: 'discrepancy',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `There was a discrepancy between the reported sales figures and the actual revenue.`, 
    `The accountant worked diligently to identify and resolve discrepancies in the financial records.`, 
    `The witness's testimony had several discrepancies that raised doubts about its accuracy.`,
    `The team conducted a thorough investigation to uncover the discrepancy in the experiment results.`,
    `__`,
     ],
  },
  {
    word: 'discriminatory',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company was accused of engaging in discriminatory hiring practices.`, 
    `Laws were enacted to protect individuals from discriminatory treatment based on their race or gender.`, 
    `The teacher was reprimanded for making discriminatory comments towards a student.`,
    `Discriminatory policies have no place in a fair and inclusive society.`,
    `__`,
     ],
  },
  {
    word: 'disgust',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The sight of the rotting garbage filled her with disgust.`, 
    `The thought of eating insects disgusted some people, while others found it intriguing.`, 
    `His offensive remarks filled her with disgust and anger.`,
    `The conditions in the prison were deplorable, leaving the inmates feeling a deep sense of disgust.`,
    `__`,
     ],
  },
  {
    word: 'disgusting',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The smell coming from the dumpster was absolutely disgusting.`, 
    `They found a dead rat in their food, which was a disgusting experience.`, 
    `The internet troll posted disgusting and offensive comments on social media.`,
    `The movie depicted gruesome and disgusting scenes that made some viewers uncomfortable.`,
    `__`,
     ],
  },
  {
    word: 'disobey',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The child was disciplined for continuously disobeying his parents' instructions.`, 
    `It is important to teach children the consequences of disobeying rules.`, 
    `The soldiers were trained to obey orders and not to disobey commands.`,
    `Disobeying traffic laws can result in fines or accidents.`,
    `__`,
     ],
  },
  {
    word: 'disparate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The two candidates held disparate views on how to address the issue.`, 
    `The communities in the region had disparate levels of access to healthcare and education.`, 
    `The research findings showed disparate results, requiring further investigation.`,
    `The team consisted of individuals with disparate backgrounds and expertise.`,
    `__`,
     ],
  },
  {
    word: 'dispensable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The unnecessary features of the product were considered dispensable and were removed to reduce costs.`, 
    `In times of budget cuts, non-essential positions may be deemed dispensable.`, 
    `The old furniture in the office was considered dispensable and was replaced with new ones.`,
    `He realized that most of the items in his storage were dispensable and decided to declutter.`,
    `__`,
     ],
  },
  {
    word: 'disposable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Single-use plastic bottles are considered disposable and contribute to environmental pollution.`, 
    `The company provided disposable utensils for the outdoor picnic to make cleanup easier.`,
    `The disposable camera was popular in the pre-digital era for capturing quick snapshots.`,
    `She always carried a pack of disposable wipes in her bag for quick cleanups on the go.`,
     ],
  },
  {
    word: 'dispute',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The neighbors had a dispute over the boundary line between their properties.`, 
    `The labor union was in a dispute with the management over working conditions and wages.`, 
    `The contract was terminated due to a legal dispute between the parties.`,
    `They hired a mediator to help resolve their business dispute amicably.`,
    `__`,
     ],
  },
  {
    word: 'disruption',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The unexpected power outage caused a disruption in the office, halting work for several hours.`, 
    `The introduction of new technology brought disruption to traditional industries.`, 
    `The protest march created a disruption in the city, affecting traffic and daily activities.`,
    `The sudden change in management strategy caused disruption among the employees.`,
    `__`,
     ],
  },
  {
    word: 'distant',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She could see a distant mountain range on the horizon, shrouded in mist.`, 
    `The couple maintained a long-distance relationship for years before finally being able to live together.`, 
    `He has a distant memory of his childhood, but the details are blurry.`,
    `The old farmhouse was located in a distant corner of the countryside.`,
    `__`,
     ],
  },
  {
    word: 'distinguished',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The professor is a distinguished scholar, known for his groundbreaking research.`, 
    `The actor was honored with a distinguished award for his contributions to the film industry.`,
    `The hotel offered a distinguished experience with its luxurious amenities and impeccable service.`,
    `She wore a distinguished outfit to the gala, attracting attention and admiration.`,
     ],
  },
  {
    word: 'distract',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The loud noise from the construction site distracted her from her work.`, 
    `He tried to distract himself from the pain by focusing on a book.`, 
    `The playful puppy constantly tried to distract its owner during training sessions.`,
    `The colorful advertisement on the billboard distracted drivers on the busy road.`,
    `__`,
     ],
  },
  {
    word: 'disturb',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The loud music coming from the party next door disturbed their peaceful evening.`, 
    `She didn't want to disturb her sleeping baby, so she tiptoed quietly out of the room.`, 
    `The disturbing news of the accident spread quickly throughout the community.`,
    `The sudden phone call disturbed his concentration while he was working.`,
    `__`,
     ],
  },
  {
    word: 'division',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company underwent a restructuring, resulting in the creation of new divisions.`, 
    `The debate over the issue created a deep division among the members of the committee.`, 
    `The country faced internal division between different political parties.`,
    `The algebra problem required the division of a large number by a smaller one.`,
    `__`,
     ],
  },
  {
    word: 'downturn',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The economic downturn led to widespread job losses and financial hardships.`, 
    `The company's profits experienced a sharp downturn due to decreased consumer spending.`, 
    `The stock market witnessed a significant downturn, causing investors to panic.`,
    `The tourism industry suffered a downturn as travel restrictions were imposed.`,
    `__`,
     ],
  },
  {
    word: 'dramatically',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The price of the house dropped dramatically, making it more affordable for buyers.`, 
    `The new marketing campaign resulted in a dramatically increased number of sales.`, 
    `The actor's performance in the play was praised for its dramatically emotional impact.`,
    `The weather changed dramatically from sunny to stormy within a matter of minutes.`,
     ],
  },
  {
    word: 'dry up',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The river dried up during the drought, leaving behind a barren landscape.`, 
    `The artist's creativity seemed to dry up, and she struggled to produce new artwork.`, 
    `The company's revenue stream began to dry up as competitors entered the market.`,
    `Her tears started to dry up as she gradually regained her composure.`,
    `__`,
     ],
  },
  {
    word: 'early_evening',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They decided to take a walk in the park during the pleasant early evening hours.`, 
    `The family gathered around the dinner table in the early evening to enjoy a meal together.`, 
    `The early evening sunlight cast a warm glow on the buildings, creating a picturesque scene.`,
    `They enjoyed a leisurely bike ride through the neighborhood during the early evening.`,
    `__`,
     ],
  },
  {
    word: 'earpiece',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The musician wore an earpiece during the performance to monitor the sound quality.`, 
    `She used a wireless earpiece to listen to music while exercising.`, 
    `The detective received important information through the hidden earpiece during the undercover operation.`,
    `The call center employee wore an earpiece to communicate with customers while keeping their hands free.`,
    `__`,
     ],
  },
  {
    word: 'economize',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `To save money, they decided to economize by cutting back on unnecessary expenses.`, 
    `The company implemented cost-saving measures to economize their operations.`, 
    `She learned to economize her time by prioritizing tasks and avoiding distractions.`,
    `The family chose to economize on their vacation by opting for budget-friendly accommodations.`,
    `__`,
     ],
  },
  {
    word: 'efficient',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The new washing machine is more efficient, using less water and energy.`, 
    `The efficient use of resources allowed the company to increase productivity while reducing costs.`, 
    `The efficient organization of files made it easy to find important documents quickly.`,
    `The efficient public transportation system helped commuters reach their destinations on time.`,
    `__`,
     ],
  },
  {
    word: 'elegant',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She wore an elegant evening gown to the formal event.`, 
    `The restaurant's interior design had an elegant and sophisticated ambiance.`, 
    `His speech was filled with elegant and eloquent phrases that captivated the audience.`,
    `The bride walked down the aisle in an elegant white wedding dress.`,
    `__`,
     ],
  },
  {
    word: 'elemental',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Oxygen is an elemental component necessary for human survival.`, 
    `The artist used elemental colors and shapes to create a simple yet powerful painting.`, 
    `The book explored the elemental forces of nature and their impact on the environment.`,
    `The scientist conducted experiments to understand the elemental composition of different substances.`,
    `__`,
     ],
  },
  {
    word: 'eliminate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The team worked together to eliminate all errors in the final report.`, 
    `The goal of the diet plan is to eliminate unhealthy eating habits and promote better nutrition.`, 
    `The company implemented new technology to eliminate manual processes and increase efficiency.`,
    `The pest control measures were successful in eliminating the infestation.`,
    `__`,
     ],
  },
  {
    word: 'eloquent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The speaker delivered an eloquent speech that moved the audience to tears.`, 
    `She expressed her thoughts in an eloquent manner, captivating her listeners.`, 
    `The writer's eloquent prose painted vivid images in the reader's mind.`,
    `The lawyer's eloquent arguments convinced the jury of his client's innocence.`,
    `__`,
     ],
  },
  {
    word: 'embark',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They decided to embark on a backpacking trip across Europe.`, 
    `The company is planning to embark on a new marketing campaign to expand its customer base.`, 
    `The young entrepreneur was eager to embark on her journey of starting her own business.`,
    `The students gathered at the airport, ready to embark on their study abroad adventure.`,
    `__`,
     ],
  },
  {
    word: 'emission',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The new car model boasts lower emissions, making it more environmentally friendly.`, 
    `The factory implemented measures to reduce its emissions and comply with environmental regulations.`, 
    `The emission of greenhouse gases contributes to climate change.`,
    `The company's sustainability initiative aims to reduce carbon emissions and promote eco-friendly practices.`,
    `__`,
     ],
  },
  {
    word: 'enchant',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The beautiful melody of the music enchanted everyone in the audience.`, 
    `The picturesque scenery of the countryside enchanted visitors from around the world.`, 
    `The fairy tale book enchanted children with its captivating stories and illustrations.`,
    `The magician's tricks and illusions enchanted the audience, leaving them in awe.`,
    `__`,
     ],
  },
  {
    word: 'encounter',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She had a chance encounter with her favorite celebrity at the coffee shop.`, 
    `The hikers encountered a bear during their trek in the wilderness.`, 
    `The traveler's journey was filled with interesting encounters with people from different cultures.`,
    `The archaeologist's discovery of ancient artifacts was a remarkable encounter with history.`,
    `__`,
     ],
  },
  {
    word: 'endure',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Despite the difficulties, they remained strong and determined to endure the challenges.`, 
    `The marathon runner trained hard to build the stamina needed to endure the race.`, 
    `The old bridge has endured for centuries, standing as a symbol of resilience.`,
    `He had to endure the pain of physical therapy to recover from his injury.`,
    `__`,
     ],
  },
  {
    word: 'enforce',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The police were assigned to enforce traffic laws and ensure public safety.`, 
    `The company implemented strict policies to enforce ethical conduct among its employees.`, 
    `The school had to enforce its dress code to maintain a professional learning environment.`,
    `The government agency was responsible for enforcing regulations on environmental conservation.`,
    `__`,
     ],
  },
  {
    word: 'enforceable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The contract contained enforceable clauses to protect the rights and obligations of both parties.`, 
    `The new law introduced enforceable penalties for tax evasion.`, 
    `The court ruled that the non-compete agreement was not enforceable due to certain legal loopholes.`,
    `It's important to have clear and enforceable rules in place to maintain order in a community.`,
    `__`,
     ],
  },
  {
    word: 'engaged',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The couple got engaged during their vacation in Paris.`, 
    `The students were actively engaged in the classroom discussion, sharing their ideas and opinions.`, 
    `She was engaged in her work, focusing intently on the task at hand.`,
    `The company organized team-building activities to keep employees engaged and motivated.`,
    `__`,
     ],
  },
  {
    word: 'enormous',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The dinosaur exhibit showcased the skeletons of enormous creatures that once roamed the Earth.`, 
    `The project required an enormous amount of time and resources to complete.`, 
    `The concert attracted an enormous crowd, filling the stadium to its capacity.`,
    `The impact of the natural disaster had an enormous effect on the local community.`,
    `__`,
     ],
  },
  {
    word: 'enthusiastic',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The students were enthusiastic about the upcoming field trip and eagerly prepared for it.`, 
    `She gave an enthusiastic presentation, showcasing her passion for the topic.`, 
    `The new employee showed great enthusiasm and willingness to learn.`,
    `The team received enthusiastic support from their fans, cheering them on during the game.`,
    `__`,
     ],
  },
  {
    word: 'envision',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The architect envisioned a modern and sustainable design for the new building.`, 
    `The CEO shared his vision and goals, encouraging employees to envision the company's future success.`, 
    `She could envision herself living in a peaceful countryside cottage surrounded by nature.`,
    `The artist envisioned a vibrant and colorful painting, bringing her imagination to life.`,
    `__`,
     ],
  },
  {
    word: 'equivalence',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The exchange rate between the two currencies was set at a fixed equivalence.`, 
    `The scientist discovered the chemical equivalence between the two substances.`, 
    `The teacher explained the mathematical equivalence of different equations.`,
    `The two groups had different methods, but their results were of equivalent value.`,
    `__`,
     ],
  },
  {
    word: 'equivalent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The university degree from the foreign institution was considered equivalent to a local degree.`, 
    `She exchanged her money for the equivalent amount in the local currency.`, 
    `The two job positions had different titles but were of equivalent importance within the company.`,
    `The chef recommended using olive oil as an equivalent substitute for butter in the recipe.`,
    `__`,
     ],
  },
  {
    word: 'erode',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The constant exposure to water caused the rocks to erode over time.`, 
    `The coastal erosion was a major concern for the residents living near the shore.`, 
    `The company's market share started to erode due to increased competition.`,
    `The passage of time had eroded his memory of the events.`,
    `__`,
     ],
  },
  {
    word: 'errand',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She ran a quick errand to pick up groceries from the store.`, 
    `The boss asked him to run an errand to deliver important documents to a client.`, 
    `The child was given the responsibility of running small errands around the house.`,
    `She forgot to complete the errand, causing a delay in the project.`,
    `__`,
     ],
  },
  {
    word: 'escort',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The security guard escorted the VIP guest into the building.`, 
    `The police officer volunteered to escort the lost child back to their parents.`, 
    `The bride's father proudly escorted her down the aisle during the wedding ceremony.`,
    `The diplomat was provided with an escort of armed guards for protection.`,
    `__`,
     ],
  },
  {
    word: 'estate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The wealthy businessman owned a large estate with a grand mansion and extensive gardens.`, 
    `She inherited a sizable estate from her late uncle.`, 
    `The real estate agent showed them various properties before they found their dream home.`,
    `The lawyer handled the legal matters related to the distribution of the deceased's estate.`,
    `__`,
     ],
  },
  {
    word: 'evaluation',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The teacher conducted a thorough evaluation of the students' performance to assess their understanding of the subject.`, 
    `The company hired a consultant to provide an evaluation of their marketing strategy.`, 
    `The evaluation of the new product revealed areas for improvement.`,
    `The athlete underwent a medical evaluation to determine the extent of the injury.`,
    `__`,
     ],
  },
  {
    word: 'evident',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The success of the project was evident in the increased sales and positive customer feedback.`, 
    `The impact of climate change is becoming more evident with rising temperatures and extreme weather events.`, 
    `The suspect's guilt was evident from the evidence collected at the crime scene.`,
    `The smile on her face made her happiness evident to everyone around her.`,
    `__`,
     ],
  },
  {
    word: 'examine',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The doctor will examine your throat to determine the cause of your soreness.`, 
    `The investigator carefully examined the clues at the crime scene to gather evidence.`, 
    `The teacher instructed the students to examine the text closely for important details.`,
    `The art curator invited experts to examine the painting for authenticity.`,
    `__`,
     ],
  },
  {
    word: 'exceptional',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Her musical talent was exceptional, captivating audiences with her performances.`, 
    `The company received an award for its exceptional customer service.`, 
    `The student's exceptional academic achievements earned them a scholarship.`,
    `The chef prepared an exceptional meal, delighting the guests with exquisite flavors.`,
    `__`,
     ],
  },
  {
    word: 'excerpt',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The author read an exciting excerpt from their new book during the book launch event.`, 
    `The article included an excerpt from an interview with the renowned scientist.`,
    `The music playlist featured a beautiful excerpt from a classical symphony.`,
    `The teacher asked the students to analyze an excerpt from a famous speech.`,
     ],
  },
  {
    word: 'exclusive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The exclusive club only allowed members to access its facilities.`, 
    `The fashion designer launched an exclusive line of clothing available only to VIP customers.`, 
    `The journalist received an exclusive interview with the celebrity, providing unique insights into their life.`,
    `The resort offered exclusive packages that included personalized services and private amenities.`,
    `__`,
     ],
  },
  {
    word: 'expedite',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The manager requested additional resources to expedite the completion of the project.`, 
    `The airport implemented automated check-in systems to expedite the boarding process.`, 
    `The company hired a courier service to expedite the delivery of important documents.`,
    `The government implemented measures to expedite the visa application process for skilled workers.`,
    `__`,
     ],
  },
  {
    word: 'explicit',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The instructions provided in the manual were clear and explicit, guiding users through the setup process.`, 
    `The contract included explicit terms and conditions regarding payment and delivery.`, 
    `The teacher gave explicit examples to illustrate the concept to the students.`,
    `The movie carried an explicit content warning due to its mature themes and scenes.`,
     ],
  },
  {
    word: 'expose',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The investigative journalist's report exposed corruption within the government.`, 
    `The documentary film aimed to expose the harsh reality of child labor in developing countries.`, 
    `The whistleblower came forward to expose the illegal activities happening within the company.`,
    `The artist's paintings exposed the raw emotions and struggles of marginalized communities.`,
    `__`,
     ],
  },
  {
    word: 'exposition',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The museum organized an exposition showcasing the works of renowned artists.`, 
    `The literature class analyzed the exposition of the novel to understand its setting and characters.`, 
    `The trade fair featured an exposition of new technological advancements in various industries.`,
    `The professor delivered a lecture on the history of art during the Renaissance as part of the exposition.`,
    `__`,
     ],
  },
  {
    word: 'extinct',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The dinosaur species became extinct millions of years ago.`, 
    `The rare flower species is on the brink of extinction due to habitat loss.`, 
    `The advent of modern technology rendered typewriters virtually extinct.`,
    `The ancient language is no longer spoken and considered extinct.`,
    `__`,
     ],
  },
  {
    word: 'facilitate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The new software system was implemented to facilitate efficient communication within the organization.`, 
    `The training workshop aimed to facilitate teamwork and collaboration among employees.`, 
    `The company provided transportation services to facilitate the commuting of its employees.`,
    `The online platform was designed to facilitate easy access to educational resources for students.`,
    `__`,
     ],
  },
  {
    word: 'faculty',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The university's faculty comprises experienced professors and scholars in various academic disciplines.`, 
    `The faculty members were actively involved in research and published their findings in prestigious journals.`, 
    `The faculty meeting discussed important curriculum changes and student performance.`,
    `The faculty of the arts organized an exhibition showcasing the creative works of students.`,
    `__`,
     ],
  },
  {
    word: 'faint',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She felt dizzy and lightheaded, causing her to faint during the presentation.`, 
    `The faint sound of music could be heard in the distance.`, 
    `The faint smell of freshly baked bread filled the air, enticing passersby.`,
    `He felt a faint sense of nostalgia when he visited his childhood home.`,
    `__`,
     ],
  },
  {
    word: 'falsify',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It is unethical to falsify data in scientific research to support desired outcomes.`, 
    `The detective discovered evidence that someone had attempted to falsify the crime scene.`, 
    `The company faced severe consequences for falsifying financial statements to deceive investors.`,
    `The journalist was fired for falsifying information in the news article.`,
    `__`,
     ],
  },
  {
    word: 'fancy',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She wore a fancy gown to the gala event, attracting attention with her elegant style.`, 
    `The chef prepared a fancy seven-course meal for the VIP guests.`, 
    `The couple decided to have a small, simple wedding instead of a fancy ceremony.`,
    `He had a fancy for vintage cars and spent his weekends restoring old models.`,
    `__`,
     ],
  },
  {
    word: 'fascinating',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The documentary provided a fascinating insight into the lives of endangered species.`, 
    `The historian's lecture on ancient civilizations was both informative and fascinating.`, 
    `The museum exhibit showcased fascinating artifacts from different historical periods.`,
    `The book captivated readers with its fascinating storyline and well-developed characters.`,
    `__`,
     ],
  },
  {
    word: 'fasten',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Please fasten your seatbelt before the plane takes off.`, 
    `The tailor offered to fasten the loose buttons on the shirt.`, 
    `He used a rope to fasten the branches of the tree together.`,
    `The lock on the gate was fastened securely to prevent unauthorized entry.`,
    `__`,
     ],
  },
  {
    word: 'fatigue',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After a long day at work, she felt a deep sense of fatigue and needed to rest.`, 
    `The athlete experienced fatigue after completing a strenuous marathon.`, 
    `Chronic fatigue can significantly impact a person's daily life and productivity.`,
    `The doctor advised the patient to manage their workload to avoid mental and physical fatigue.`,
    `__`,
     ],
  },
  {
    word: 'fed up',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She was fed up with the constant delays and inefficiency of public transportation.`, 
    `The employees were fed up with the company's lack of communication and unfair treatment.`, 
    `He reached a point where he was fed up with the never-ending arguments and decided to walk away.`,
    `The community was fed up with the noise pollution caused by late-night parties and took action to address the issue.`,
    `__`,
     ],
  },
  {
    word: 'fence',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The farmer installed a sturdy fence around the perimeter of the field to protect the crops from wild animals.`, 
    `The children played hide-and-seek in the backyard, using the fence as a boundary.`, 
    `The neighborhood association agreed to repair the damaged fence at the community park.`,
    `The house had a beautiful white picket fence, adding charm to its exterior.`,
    `__`,
     ],
  },
  {
    word: 'flaw',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The diamond had a small flaw, but it didn't diminish its overall beauty.`, 
    `The architect reviewed the building plans and identified a flaw in the structural design.`, 
    `She was a perfectionist and couldn't tolerate any flaws in her artwork.`,
    `The detective noticed a flaw in the suspect's alibi, raising doubts about their innocence.`,
    `__`,
     ],
  },
  {
    word: 'forthcoming',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The author announced that a forthcoming book in the series would be released next month.`, 
    `The company's CEO shared some exciting news about forthcoming product updates.`, 
    `The politician promised to address the issue during the forthcoming town hall meeting.`,
    `The students eagerly awaited the forthcoming exam results.`,
    `__`,
     ],
  },
  {
    word: 'fortitude',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Despite facing numerous challenges, she displayed remarkable fortitude and persevered towards her goals.`, 
    `The soldiers demonstrated immense fortitude in the face of adversity on the battlefield.`, 
    `He relied on his inner strength and fortitude to overcome the hardships of life.`,
    `The cancer survivor's story inspired others with her courage and fortitude.`,
    `__`,
     ],
  },
  {
    word: 'fountain_pen',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The writer preferred using a fountain pen for its smooth and elegant writing experience.`, 
    `He received a luxurious fountain pen as a gift, which became his cherished writing instrument.`, 
    `The calligrapher showcased their artistic skills using a beautiful fountain pen.`,
    `The antique shop displayed a collection of vintage fountain pens from different eras.`,
    `__`,
     ],
  },
  {
    word: 'fraud',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company implemented strict measures to prevent fraud and protect customer information.`, 
    `The authorities arrested the businessman for engaging in fraudulent financial activities.`, 
    `The email claimed to be a lottery win but turned out to be a fraud designed to deceive unsuspecting individuals.`,
    `The insurance investigator uncovered evidence of fraud in the accident claim.`,
    `__`,
     ],
  },
  {
    word: 'fraudulently_unlawfully',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company's former executive was charged with fraudulently obtaining funds from investors.`, 
    `The artist was accused of fraudulently selling counterfeit paintings as original artworks.`, 
    `The hackers gained unauthorized access to the database and fraudulently acquired sensitive customer data.`,
    `The investigation revealed that the business owner had been fraudulently evading taxes for years.`,
    `__`,
     ],
  },
  {
    word: 'freak',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `A sudden storm caused a freak accident that uprooted several trees.`, 
    `He had a collection of oddities and curiosities, including a two-headed calf, in his freak museum.`, 
    `The unusual creature spotted in the forest was considered a genetic freak of nature.`,
    `The roller coaster ride offered an exhilarating experience for thrill-seekers and adrenaline junkies.`,
    `__`,
     ],
  },
  {
    word: 'freight',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The cargo ship transported a large quantity of freight across international waters.`, 
    `The logistics company specialized in providing efficient freight services to businesses.`, 
    `The delivery truck was loaded with various types of freight, including packages and pallets.`,
    `The port was bustling with activity as cranes unloaded freight from cargo ships.`,
    `__`,
     ],
  },
  {
    word: 'frightening',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The horror movie had many frightening scenes that made the audience jump in their seats.`, 
    `The sudden loud noise in the dark alley was quite frightening, causing her heart to race.`,
    `The child had a frightening experience during the thunderstorm and sought comfort from their parents.`,
    `The witness testified about the frightening encounter they had with the assailant.`,
     ],
  },
  {
    word: 'frustration',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He expressed his frustration over the constant delays in public transportation.`, 
    `The project faced numerous challenges, leading to frustration among the team members.`, 
    `She felt a sense of frustration when her computer crashed just before she could save her work.`,
    `The lack of clear instructions caused frustration for the participants of the workshop.`,
    `__`,
     ],
  },
  {
    word: 'funding',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The nonprofit organization received generous funding from donors to support its charitable initiatives.`, 
    `The government allocated additional funding to improve healthcare services in rural areas.`, 
    `The startup secured venture capital funding to expand its operations and develop new products.`,
    `The research project was put on hold due to a lack of funding.`,
    `__`,
     ],
  },
  {
    word: 'garment',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She sewed her own garments, designing and creating unique pieces of clothing.`, 
    `The fashion designer showcased their latest collection of elegant garments on the runway.`, 
    `The laundry service ensured proper care and maintenance of delicate garments.`,
    `The store offered a wide selection of high-quality garments for men, women, and children.`,
    `__`,
     ],
  },
  {
    word: 'glare',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The bright sunlight reflected off the snow, creating a blinding glare.`, 
    `She put on a pair of sunglasses to protect her eyes from the intense glare of the headlights.`, 
    `The office had anti-glare screens installed on the computer monitors to reduce eye strain.`,
    `The driver's vision was impaired by the glare from the oncoming car's headlights.`,
    `__`,
     ],
  },
  {
    word: 'go_straight_to',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `If you want to reach the bookstore, go straight to the end of the street and turn right.`, 
    `The doctor instructed her patient to go straight to the emergency room if the symptoms worsened.`, 
    `To access the gym, go straight to the second floor and follow the signs.`,
    `He was eager to meet his friends, so he decided to go straight to the party after work.`,
    `__`,
     ],
  },
  {
    word: 'goggles',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The scientist wore protective goggles to shield their eyes from the chemical fumes.`, 
    `The swimmer put on swimming goggles to enhance visibility in the water.`, 
    `The ski resort required all skiers to wear goggles for protection against snow and wind.`,
    `The lab technician wore safety goggles to prevent any potential eye injuries.`,
    `__`,
     ],
  },
  {
    word: 'grape',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She enjoyed the sweet and juicy taste of red grapes as a healthy snack.`, 
    `The vineyard harvested ripe grapes to produce high-quality wine.`, 
    `The recipe called for a handful of grapes to add a burst of freshness to the salad.`,
    `He squeezed the grapes to extract the juice and made homemade grape jelly.`,
    `__`,
     ],
  },
  {
    word: 'growth',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company experienced rapid growth, expanding its operations to new markets.`, 
    `The child's growth chart showed steady progress in height and weight.`, 
    `The city's infrastructure development supported the growth of businesses and population.`,
    `The gardener ensured proper care and nourishment for the plants to promote healthy growth.`,
    `__`,
     ],
  },
  {
    word: 'hamper',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The heavy rain hampered the progress of the construction project.`, 
    `She packed a picnic hamper with sandwiches, fruits, and drinks for a day at the park.`, 
    `The broken elevator hampered the residents' ability to access the upper floors of the building.`,
    `The team faced several challenges that hampered their chances of winning the championship.`,
    `__`,
     ],
  },
  {
    word: 'handy',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The multitool with various functions proved to be very handy during camping trips.`, 
    `He always kept a notepad and pen handy to jot down important ideas and reminders.`, 
    `The mobile app provided a handy solution for tracking expenses and managing finances.`,
    `The handyman fixed the broken faucet in no time with his toolbox of tools.`,
    `__`,
     ],
  },
  {
    word: 'harmony',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The choir's voices blended in perfect harmony, creating a beautiful melody.`, 
    `The family lived in harmony, supporting and respecting each other's choices.`, 
    `The painting showcased a harmonious combination of colors and brushstrokes.`,
    `The community worked together in harmony to organize a successful charity event.`,
    `__`,
     ],
  },
  {
    word: 'hazard',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The construction site had warning signs indicating potential hazards.`, 
    `The icy road posed a hazard to drivers, requiring extra caution.`, 
    `The chemical spill in the lab created a hazardous environment, necessitating evacuation.`,
    `The hiker encountered various hazards, such as steep cliffs and slippery trails.`,
    `__`,
     ],
  },
  {
    word: 'heat',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The summer heat was sweltering, prompting people to seek shade or stay indoors.`, 
    `She used a hairdryer to apply heat to the sticker, making it easier to remove.`, 
    `The chef turned up the heat on the stove to quickly cook the vegetables.`,
    `The heat from the fireplace provided warmth and coziness during the winter.`,
    `__`,
     ],
  },
  {
    word: 'hitchhike',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `When her car broke down, she had to hitchhike to get to the nearest town.`, 
    `He decided to hitchhike across the country to have an adventurous travel experience.`, 
    `The backpacker relied on hitchhiking to cover long distances during their journey.`,
    `Hitchhiking was a common`,
    `__`,
     ],
  },
  {
    word: 'horrible',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The horror movie had a plot filled with suspense and terrifying scenes, making it a truly horrible experience.`, 
    `The food at the restaurant was of poor quality and tasted horrible.`, 
    `She had a horrible headache and couldn't concentrate on her work.`,
    `The accident caused horrible injuries and required immediate medical attention`,
    `__`,
     ],
  },
  {
    word: 'hygiene',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It's important to maintain good personal hygiene by regularly washing hands and taking showers.`, 
    `The restaurant maintained high standards of hygiene in food preparation and cleanliness.`, 
    `The dentist emphasized the importance of oral hygiene and recommended regular brushing and flossing.`,
    `The hospital implemented strict hygiene protocols to prevent the spread of infections`,
    `__`,
     ],
  },
  {
    word: 'imagine',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She closed her eyes and let her imagination run wild, picturing herself in a peaceful garden.`, 
    `The author's vivid descriptions allowed readers to imagine themselves in the fictional world.`, 
    `Imagine a world without poverty, where everyone has equal opportunities.`,
    `The artist used various colors and strokes to create a painting that invites viewers to imagine their own stories.`,
    `__`,
     ],
  },
  {
    word: 'immeasurable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Her love for her children was immeasurable; she would do anything to see them happy.`, 
    `The impact of the environmental disaster was immeasurable, causing long-term damage to the ecosystem.`, 
    `The artist's talent was immeasurable, and their paintings left viewers in awe.`,
    `The philanthropist's generosity had an immeasurable effect on the lives of countless people.`,
    `__`,
     ],
  },
  {
    word: 'immunity',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Vaccination helps build immunity against certain diseases by stimulating the body's defense system.`, 
    `The toddler's mother passed on immunity to her child through breastfeeding.`, 
    `Some people have natural immunity to certain infections due to previous exposure.`,
    `The flu shot provides temporary immunity against the influenza virus.`,
    `__`,
     ],
  },
  {
    word: 'impair',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The accident impaired his ability to walk, requiring him to use crutches.`, 
    `Lack of sleep can impair cognitive function and decision-making skills.`, 
    `Excessive alcohol consumption can impair judgment and coordination.`,
    `The company's financial losses severely impaired its ability to invest in new projects.`,
    `__`,
     ],
  },
  {
    word: 'imperative',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It is imperative to wear protective gear when riding a motorcycle to minimize the risk of injury.`, 
    `It is imperative that we take immediate action to address climate change and its consequences.`, 
    `The doctor stressed the imperative of taking medication as prescribed to manage the condition.`,
    `Learning basic first aid skills is imperative in case of emergencies.`,
    `__`,
     ],
  },
  {
    word: 'impertinent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The student's impertinent remark disrupted the class and showed a lack of respect for the teacher.`, 
    `The journalist asked impertinent questions during the press conference, irritating the speaker.`,
    `It's impertinent to comment on someone's personal life without their consent.`,
    `The lawyer objected to the impertinent line of questioning from the opposing counsel.`,
     ],
  },
  {
    word: 'impose',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The government imposed a curfew to maintain public safety during the protest.`, 
    `The new regulations imposed stricter rules on businesses to protect the environment.`, 
    `The teacher imposed a deadline for submitting the assignments to encourage timely completion.`,
    `The company decided to impose a ban on smoking within its premises.`,
    `__`,
     ],
  },
  {
    word: 'improperly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The package was improperly handled during shipping, resulting in damage to its contents.`, 
    `The suspect was accused of using the funds improperly for personal expenses.`, 
    `The machine malfunctioned because it was improperly maintained.`,
    `The student was reprimanded for using improper language in the classroom.`,
    `__`,
     ],
  },
  {
    word: 'in dispute',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The ownership of the land is in dispute between two neighboring families.`, 
    `The contract terms are still in dispute, and negotiations are ongoing.`, 
    `The court case is in dispute as both parties present different versions of the events.`,
    `The decision made by the committee is in dispute, leading to further discussions.`,
    `__`,
     ],
  },
  {
    word: 'in the meantime',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The repairs will take some time; in the meantime, you can use a temporary solution.`, 
    `The final report is not ready yet. In the meantime, I can provide you with a preliminary summary.`, 
    `The bus hasn't arrived yet. In the meantime, let's find a nearby cafe to wait.`,
    `The project is on hold. In the meantime, we can focus on other pending tasks.`,
    `__`,
     ],
  },
  {
    word: 'inaugural',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The inaugural ceremony marked the beginning of a new era for the organization.`, 
    `The newly elected president delivered an inspiring speech at their inaugural address.`, 
    `The museum displayed historical artifacts from the inaugural space mission.`,
    `The inaugural event attracted a large audience and received extensive media coverage.`,
    `__`,
     ],
  },
  {
    word: 'inaugurate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The mayor will inaugurate the new library by cutting the ribbon during the opening ceremony.`, 
    `The gallery will inaugurate its latest exhibition with a reception for artists and art enthusiasts.`, 
    `The company plans to inaugurate its new headquarters with a grand celebration.`,
    `The president-elect will be inaugurated into office in a formal ceremony.`,
    `__`,
     ],
  },
  {
    word: 'incentive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company offered a performance-based bonus as an incentive for employees to achieve their targets.`, 
    `The scholarship program provides financial incentives for students to pursue higher education.`, 
    `The government introduced tax incentives to promote investments in renewable energy.`,
    `The sales team was motivated by the incentive of earning a luxury trip for exceeding their targets.`,
    `__`,
     ],
  },
  {
    word: 'inclement',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The inclement weather forced the cancellation of outdoor activities.`, 
    `The hikers were ill-prepared for the inclement conditions and had to seek shelter.`, 
    `The inclement winter storm caused power outages and disrupted transportation.`,
    `The school declared a closure due to the inclement weather, ensuring the safety of students.`,
    `__`,
     ],
  },
  {
    word: 'incomes',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The survey analyzed the distribution of incomes across different socio-economic groups.`, 
    `The government implemented policies to reduce income inequality and uplift lower-income households.`, 
    `The company provides employees with annual reports outlining their incomes and benefits.`,
    `The economic downturn affected household incomes, leading to financial hardships for many.`,
    `__`,
     ],
  },
  {
    word: 'inconsiderate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The neighbor's loud music late at night was inconsiderate to others trying to sleep.`, 
    `Leaving trash behind on the beach is an inconsiderate behavior that harms the environment.`,
    `Talking loudly on the phone in a public place is considered inconsiderate and disruptive.`,
    `The inconsiderate driver cut off other cars without using their turn signal.`,
     ],
  },
  {
    word: 'incorporate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company decided to incorporate customer feedback into their product development process.`, 
    `The new edition of the book will incorporate additional chapters and updated information.`, 
    `The dance routine will incorporate elements of both contemporary and classical styles.`,
    `The architect's design incorporates sustainable features to minimize environmental impact.`,
    `__`,
     ],
  },
  {
    word: 'increasingly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `With the advancement of technology, remote work has become increasingly popular.`, 
    `The company's profits have been increasingly growing over the past few years.`, 
    `People are becoming increasingly aware of the importance of mental health.`,
    `The use of renewable energy sources is increasingly seen as essential for a sustainable future.`,
    `__`,
     ],
  },
  {
    word: 'incredibly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The magician performed an incredibly impressive trick that left the audience in awe.`, 
    `The sunset over the ocean was incredibly beautiful, with vibrant hues of orange and pink.`, 
    `The team's hard work and dedication led to an incredibly successful product launch.`,
    `The athlete's performance was incredibly fast, setting a new world record.`,
    `__`,
     ],
  },
  {
    word: 'incur',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Failure to comply with the regulations may incur penalties or fines.`, 
    `The construction project incurred unexpected delays due to bad weather conditions.`, 
    `Reckless spending can lead to debt and incur financial difficulties.`,
    `The decision to expand the business incurred additional costs but brought long-term benefits.`,
    `__`,
     ],
  },
  {
    word: 'indication',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The dark clouds in the sky were an indication of an approaching storm.`, 
    `The doctor noted several symptoms as an indication of a possible infection.`, 
    `The rise in stock prices is an indication of a healthy economy.`,
    `The survey results serve as an indication of public opinion on the matter.`,
    `__`,
     ],
  },
  {
    word: 'indispensable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `A good communication system is indispensable for effective teamwork.`, 
    `The secretary's organizational skills were indispensable in managing the office efficiently.`, 
    `Technology has become indispensable in our daily lives, facilitating various tasks.`,
    `The experienced guide was considered indispensable for navigating through the challenging terrain.`,
    `__`,
     ],
  },
  {
    word: 'inevitable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Change is inevitable; we must adapt and embrace it.`, 
    `The passage of time is an inevitable part of life.`, 
    `With the increase in population, traffic congestion has become inevitable in urban areas.`,
    `The couple realized that their breakup was inevitable due to irreconcilable differences.`,
    `__`,
     ],
  },
  {
    word: 'infant',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The newborn infant was carefully cradled in their mother's arms.`, 
    `The pediatrician provided guidance on caring for the infant's health and well-being.`, 
    `The parents installed safety gates to protect their curious infant from accessing stairs.`,
    `The infant's first smile brought joy to everyone around them.`,
    `__`,
     ],
  },
  {
    word: 'infer',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `From the evidence presented, we can infer that the suspect was at the scene of the crime.`, 
    `The teacher asked the students to infer the author's intended meaning from the text.`, 
    `His facial expression and body language inferred that he was feeling sad.`,
    `The politician's speech left room for listeners to infer their stance on the issue.`,
    `__`,
     ],
  },
  {
    word: 'influence',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Parents have a significant influence on their children's values and behavior.`, 
    `The mentor's guidance and advice had a positive influence on the aspiring artist.`, 
    `Social media platforms have a profound influence on shaping public opinion.`,
    `The historical event had a lasting influence on the country's cultural development.`,
    `__`,
     ],
  },
  {
    word: 'influx',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The opening of a new shopping mall led to an influx of shoppers in the area.`, 
    `The city experienced an influx of tourists during the holiday season.`, 
    `The company's marketing campaign resulted in an influx of new customers.`,
    `The sudden influx of donations greatly benefited the charity organization.`,
    `__`,
     ],
  },
  {
    word: 'ingredient',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The recipe requires several ingredients, including flour, sugar, and eggs.`, 
    `The chef emphasized the importance of using fresh and high-quality ingredients.`, 
    `The secret ingredient in the sauce gave it a unique and flavorful taste.`,
    `The ingredient list on the product packaging provides information about allergens.`,
    `__`,
     ],
  },
  {
    word: 'inhabit',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Many different species of birds inhabit the forest.`, 
    `The island is uninhabited, making it an ideal destination for a secluded getaway.`, 
    `The village is inhabited by a close-knit community of farmers.`,
    `Ancient ruins provide evidence that people inhabited this area thousands of years ago.`,
    `__`,
     ],
  },
  {
    word: 'initially',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Initially, I was skeptical about the idea, but after further consideration, I changed my mind.`, 
    `The project faced some challenges initially but eventually gained momentum.`, 
    `Initially, the plan was to have a small gathering, but it evolved into a grand celebration.`,
    `The company's stock price initially surged, but later experienced a slight decline.`,
    `__`,
     ],
  },
  {
    word: 'initiative',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The government launched an initiative to promote environmental conservation.`, 
    `The student took the initiative to organize a fundraising event for a local charity.`, 
    `The company encourages employees to take the initiative and propose innovative ideas.`,
    `The initiative aims to provide educational opportunities to underprivileged children.`,
    `__`,
     ],
  },
  {
    word: 'injury',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The athlete suffered a severe injury during the game and had to be taken off the field.`, 
    `The safety regulations were implemented to prevent workplace injuries.`, 
    `The car accident resulted in multiple injuries, requiring immediate medical attention.`,
    `The injured hiker was rescued from the mountain and taken to the hospital.`,
    `__`,
     ],
  },
  {
    word: 'inquiry',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The customer made an inquiry about the availability of a specific product.`, 
    `The committee launched an inquiry to investigate allegations of misconduct.`, 
    `The teacher encouraged students to ask questions and engage in inquiry-based learning.`,
    `The police conducted an inquiry to gather information and evidence related to the case.`,
    `__`,
     ],
  },
  {
    word: 'inspiration',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The breathtaking sunset served as inspiration for the artist's painting.`, 
    `The motivational speaker shared stories of personal triumph as inspiration for the audience.`, 
    `The book was an endless source of inspiration for aspiring writers.`,
    `The accomplishments of historical figures can be a source of inspiration for future generations.`,
    `__`,
     ],
  },
  {
    word: 'inspiring',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The documentary showcased the inspiring journey of a young entrepreneur.`, 
    `The teacher's dedication and passion for teaching were inspiring to her students.`, 
    `The charity event was inspiring, as it brought together people from all walks of life to support a common cause.`,
    `The athlete's perseverance and determination in the face of adversity were truly inspiring.`,
    `__`,
     ],
  },
  {
    word: 'instinct',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The mother's instinct kicked in when she sensed her child was in danger.`, 
    `Animals rely on their instincts to survive in the wild.`, 
    `Trust your instincts when making important decisions.`,
    `The detective's keen instincts helped solve the mysterious crime.`,
    `__`,
     ],
  },
  {
    word: 'institute',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The university recently established an institute dedicated to environmental research.`, 
    `The institute offers various courses and programs in business administration.`, 
    `The government instituted new policies to address economic inequality.`,
    `The research institute collaborated with international partners on a groundbreaking study.`,
    `__`,
     ],
  },
  {
    word: 'institution',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Marriage is considered a fundamental institution in many cultures.`, 
    `The museum is a cultural institution that showcases historical artifacts.`, 
    `The institution of family plays a crucial role in shaping individuals and society.`,
    `The government provides funding for healthcare institutions to improve medical services.`,
    `__`,
     ],
  },
  {
    word: 'integral',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Effective communication is integral to building strong relationships.`, 
    `Teamwork is an integral part of achieving success in group projects.`, 
    `Technology has become an integral aspect of our daily lives.`,
    `The company values diversity as an integral component of its organizational culture.`,
    `__`,
     ],
  },
  {
    word: 'intensity',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The intensity of the storm caused widespread damage to buildings and infrastructure.`, 
    `The athlete trained hard to increase the intensity of their workouts.`, 
    `The intensity of the argument escalated as emotions ran high.`,
    `The movie was praised for its intense storyline and gripping performances.`,
    `__`,
     ],
  },
  {
    word: 'interchangeable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The two models of smartphones are almost identical and are often considered interchangeable.`, 
    `The parts of this machine are interchangeable, making it easier to replace damaged components.`, 
    `In this recipe, different types of vegetables can be used interchangeably based on personal preference.`,
    `The terms "concern" and "worry" are often used interchangeably in everyday conversation.`,
    `__`,
     ],
  },
  {
    word: 'interest',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She developed a keen interest in photography after taking a photography class.`, 
    `The bank offers competitive interest rates on savings accounts.`, 
    `The museum exhibit attracted the interest of art enthusiasts from around the world.`,
    `He read books on a wide range of topics to satisfy his diverse interests.`,
    `__`,
     ],
  },
  {
    word: 'intermission',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `During the intermission, attendees took a break and visited the concession stand.`, 
    `The play had two acts with a 15-minute intermission in between.`, 
    `The audience used the intermission as an opportunity to discuss the first half of the performance.`,
    `The intermission allowed the stage crew to make necessary set changes.`,
    `__`,
     ],
  },
  {
    word: 'intersection',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The traffic accident occurred at the intersection of Main Street and Elm Avenue.`, 
    `Pedestrians should exercise caution when crossing busy intersections.`, 
    `The intersection of art and technology is explored in this innovative exhibition.`,
    `The protest took place at the intersection of social justice and civil rights.`,
    `__`,
     ],
  },
  {
    word: 'intrude',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Please respect my privacy and do not intrude into my personal matters.`, 
    `The loud noise from the neighboring construction site intruded on our peaceful evening.`, 
    `It is impolite to intrude on someone's conversation without invitation.`,
    `The detective suspected that the thief had intruded into the victim's home.`,
     ],
  },
  {
    word: 'intuition',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She followed her intuition and made a decision based on her gut feeling.`, 
    `The artist relied on intuition to guide the brushstrokes and create a masterpiece.`, 
    `He had a strong intuition that something was wrong and decided to investigate further.`,
    `Developing intuition is a valuable skill that can enhance decision-making abilities.`,
    `__`,
     ],
  },
  {
    word: 'invent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Thomas Edison is known for inventing the phonograph and the electric light bulb.`, 
    `The scientist's breakthrough discovery revolutionized the field and brought him recognition as an inventive genius.`, 
    `She had a brilliant idea and went on to invent a new gadget that simplified daily tasks.`,
    `The company encourages employees to be innovative and invent new solutions.`,
    `__`,
     ],
  },
  {
    word: 'irrational',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `His fear of flying was irrational, as statistics showed that air travel is one of the safest modes of transportation.`, 
    `The decision to purchase the expensive luxury item seemed irrational given her financial situation.`, 
    `The child's tantrum was fueled by irrational fears of imaginary monsters.`,
    `The politician's statements were criticized for being based on irrational beliefs rather than facts.`,
    `__`,
     ],
  },
  {
    word: 'irritate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The constant buzzing of the mosquito was beginning to irritate me.`, 
    `His habit of interrupting others during conversations often irritates his friends.`, 
    `The scratchy fabric of the shirt irritated her sensitive skin.`,
    `The long wait at the doctor's office started to irritate the patients.`,
    `__`,
     ],
  },
  {
    word: 'itinerary',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The travel agency provided us with a detailed itinerary for our upcoming trip.`, 
    `The tour guide will lead us through various landmarks as per the planned itinerary.`, 
    `She carefully reviewed the itinerary to ensure that all the important locations were included.`,
    `The itinerary included visits to museums, historical sites, and cultural events.`,
    `__`,
     ],
  },
  {
    word: 'lapse',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He forgot about his appointment due to a lapse in memory.`, 
    `The company experienced a temporary lapse in production due to equipment failure.`, 
    `She regretted her lapse in judgment and apologized for her actions.`,
    `The athlete's performance suffered as a result of a momentary lapse in concentration.`,
    `__`,
     ],
  },
  {
    word: 'lay sth out',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The architect laid out the plans for the new building in great detail.`, 
    `She meticulously laid out all the ingredients and tools before starting the cooking process.`, 
    `The professor laid out the course syllabus at the beginning of the semester.`,
    `The graphic designer laid out the brochure to create an appealing visual arrangement.`,
    `__`,
     ],
  },
  {
    word: 'layoff',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The economic downturn led to a series of layoffs in the company.`, 
    `The company announced a workforce reduction plan that included layoffs and voluntary resignations.`, 
    `He was devastated when he received the news of his layoff.`,
    `The employees affected by the layoff were offered severance packages and career counseling.`,
    `__`,
     ],
  },
  {
    word: 'lead time',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The lead time for this product is approximately two weeks.`, 
    `The project requires a lead time of at least three months for proper planning and execution.`, 
    `The manufacturer experienced delays in production, resulting in longer lead times for customer orders.`,
    `The shipping company provides estimates for lead times based on the destination and shipping method chosen.`,
    `__`,
     ],
  },
  {
    word: 'leaned_over',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She leaned over the balcony to get a better view of the parade below.`, 
    `He leaned over the table to whisper a secret into his friend's ear.`, 
    `The child leaned over the edge of the pool to dip their hand in the water.`,
    `The student leaned over the textbook, absorbed in studying for the exam.`,
    `__`,
     ],
  },
  {
    word: 'liability',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company faced a significant financial liability due to a breach of contract.`, 
    `The driver was found to be at fault and held liable for the damages caused in the accident.`, 
    `The contract included a liability clause that protected both parties in case of unforeseen circumstances.`,
    `It's important to have liability insurance when running a business to protect against potential lawsuits.`,
    `__`,
     ],
  },
  {
    word: 'lifelong',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She had a lifelong passion for music and pursued a career as a professional musician.`, 
    `The couple made a lifelong commitment to each other on their wedding day.`,
    `He dedicated himself to lifelong learning and constantly sought opportunities to expand his knowledge.`,
    `The grandmother shared her wisdom and life lessons with her grandchildren throughout their lifelong relationship.`,
     ],
  },
  {
    word: 'likewise',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She greeted her friend with a warm smile, and he responded likewise.`, 
    `He was a dedicated teacher, and his students respected him likewise.`, 
    `The manager advised the team to work collaboratively and support each other's ideas. Likewise, she promised to provide guidance and assistance.`,
    `"I hope you have a great day!" she said as she left. "Likewise!" he replied with a smile.`,
    `__`,
     ],
  },
  {
    word: 'long-held',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The scientist's research challenged long-held beliefs in the field of physics.`, 
    `The long-held tradition of celebrating holidays with family and friends continued for generations.`, 
    `The community fought to preserve a long-held historical landmark from demolition.`,
    `The author's new book presented a fresh perspective on a long-held literary genre.`,
    `__`,
     ],
  },
  {
    word: 'lucrative',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The entrepreneur started a successful business and enjoyed lucrative returns on her investment.`, 
    `The real estate market in the city was booming, making it a lucrative opportunity for property investors.`, 
    `The freelance graphic designer found a lucrative gig working on a high-profile advertising campaign.`,
    `The tech industry offered many lucrative job opportunities for skilled professionals.`,
    `__`,
     ],
  },
  {
    word: 'malfunction',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The computer experienced a malfunction and crashed, causing the loss of unsaved work.`, 
    `The car's engine malfunctioned, leaving the driver stranded on the side of the road.`, 
    `The printer malfunctioned and produced smudged copies of the document.`,
    `The alarm system malfunctioned, triggering a false alarm and causing inconvenience to the residents.`,
    `__`,
     ],
  },
  {
    word: 'manners',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It's important to teach children good manners and respect for others.`, 
    `He displayed impeccable manners at the formal dinner, impressing everyone with his politeness.`,
    `The customer appreciated the waiter's attentive manners and excellent service.`,
    `She was known for her gracious manners and thoughtful gestures.`,
     ],
  },
  {
    word: 'masterpiece',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The artist's latest painting was hailed as a masterpiece and quickly sold at a high price.`, 
    `The composer's symphony was considered a musical masterpiece of the 20th century.`, 
    `The chef prepared a culinary masterpiece that delighted the taste buds of the diners.`,
    `The writer's novel was regarded as a literary masterpiece, earning critical acclaim and a wide readership.`,
    `__`,
     ],
  },
  {
    word: 'maternity_leave',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company offers maternity leave to its employees to support work-life balance and the well-being of new parents.`, 
    `She planned her workload and projects before going on maternity leave to ensure a smooth transition for her team.`, 
    `The government extended the duration of maternity leave to provide better support for working mothers.`,
    `The company policy allows employees to gradually return to work after maternity leave, easing the transition back into the workplace.`,
    `__`,
     ],
  },
  {
    word: 'merit',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The student's essay received a high grade due to its well-researched content and strong arguments.`, 
    `The promotion was based on merit, considering the employee's performance and contributions to the company.`, 
    `The scholarship was awarded to the student who demonstrated outstanding academic merit and leadership qualities.`,
    `The judge evaluated the case on its merits, considering the evidence presented and the relevant laws.`,
    `__`,
     ],
  },
  {
    word: 'mileage',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The car had low mileage and was in excellent condition, making it an attractive option for buyers.`, 
    `She tracked her running mileage to monitor her progress and set new fitness goals.`, 
    `The business traveler accumulated frequent flyer mileage and enjoyed various travel perks.`,
    `The new hybrid car boasted impressive fuel efficiency, allowing drivers to save on mileage expenses.`,
    `__`,
     ],
  },
  {
    word: 'minister',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The minister delivered a powerful sermon that resonated with the congregation.`, 
    `The prime minister addressed the nation in a televised speech, outlining the government's plans for the future.`, 
    `The wedding ceremony was officiated by a minister who conducted a heartfelt and personalized service.`,
    `The health minister announced new measures to improve public healthcare and access to medical services.`,
    `__`,
     ],
  },
  {
    word: 'morale',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The team's morale was high after winning the championship game.`, 
    `The company organized team-building activities to boost employee morale and strengthen relationships.`, 
    `The manager addressed the concerns of the staff to improve overall morale in the workplace.`,
    `The successful completion of a challenging project boosted the morale of the entire department.`,
    `__`,
     ],
  },
  {
    word: 'motivate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The coach delivered an inspiring speech to motivate the team before the important game.`, 
    `She read motivational quotes every morning to help motivate herself for the day ahead.`, 
    `The teacher used positive reinforcement to motivate students to participate actively in class.`,
    `The success stories of entrepreneurs and leaders can often motivate others to pursue their dreams.`,
    `__`,
     ],
  },
  {
    word: 'motto',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `"Work hard, play hard" was their motto, emphasizing the importance of balancing work and leisure.`, 
    `The school's motto was "Learn, lead, and make a difference" to inspire students to strive for excellence.`, 
    `The organization adopted the motto "Service with a smile" to highlight their commitment to customer satisfaction.`,
    `He lived by the motto "Never give up" and faced challenges with determination and resilience.`,
    `__`,
     ],
  },
  {
    word: 'mow',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He spent the afternoon mowing the lawn, ensuring it was neat and well-maintained.`, 
    `The landscaping company sent a team to mow the large field, making it ready for a sporting event.`, 
    `She used a push mower to mow the small backyard, enjoying the physical activity and fresh air.`,
    `The farmer mowed the hayfield to harvest the crops for animal feed.`,
    `__`,
     ],
  },
  {
    word: 'neglect',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The landlord was accused of neglecting the maintenance of the rental property, leading to deteriorating conditions.`, 
    `She regretted neglecting her health and decided to prioritize self-care and well-being.`, 
    `The neglected garden was transformed into a beautiful space after months of dedicated care and attention.`,
    `The child's educational needs were neglected, resulting in academic struggles and a lack of progress.`,
    `__`,
     ],
  },
  {
    word: 'newcomer',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The office welcomed the newcomer with a friendly introduction and a warm smile.`, 
    `The school organized an orientation program to help newcomers adjust to their new environment.`, 
    `The city had a supportive community for newcomers, providing resources and assistance for a smooth transition.`,
    `The newcomer quickly made friends and integrated into the social circle, feeling welcomed and accepted.`,
    `__`,
     ],
  },
  {
    word: 'nomination',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Her outstanding achievements led to her nomination for the prestigious award.`, 
    `The committee considered several candidates before making the final nomination for the leadership position.`, 
    `He was surprised by his nomination as class president and felt honored to have the support of his peers.`,
    `The film received multiple nominations at the prestigious film festival, recognizing its artistic excellence.`,
    `__`,
     ],
  },
  {
    word: 'objection',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The lawyer raised an objection to the witness's testimony, citing lack of relevance to the case.`, 
    `The proposal was met with objections from several members of the board due to concerns about its feasibility.`, 
    `She voiced her objection to the new policy during the team meeting, expressing her disagreement with its implications.`,
    `The opposition party raised objections to the government's proposed legislation, arguing that it infringed upon civil liberties.`,
    `__`,
     ],
  },
  {
    word: 'occasionally',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They occasionally met for coffee to catch up on each other's lives.`, 
    `The company organized occasional team-building activities to foster camaraderie among employees.`, 
    `She enjoyed indulging in her favorite dessert occasionally as a special treat.`,
    `Occasionally, she would take a break from work and go for a leisurely walk to clear her mind.`,
    `__`,
     ],
  },
  {
    word: 'oddly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The keys went missing, and oddly enough, they were found in the refrigerator.`, 
    `He always wore mismatched socks, as he found comfort in embracing the oddly quirky side of life.`, 
    `The cat's behavior was oddly affectionate towards the new houseplant.`,
    `The car made an oddly loud noise whenever it started, prompting a trip to the mechanic.`,
    `__`,
     ],
  },
  {
    word: 'ominous',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Dark clouds gathered in the sky, creating an ominous atmosphere before the storm.`, 
    `The eerie silence in the abandoned house sent an ominous chill down their spines.`, 
    `The detective sensed an ominous presence as they investigated the crime scene.`,
    `The sudden drop in stock prices was seen as an ominous sign for the economy.`,
    `__`,
     ],
  },
  {
    word: 'openly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She openly expressed her opinions during the heated debate, not afraid to voice her perspective.`, 
    `The company encouraged employees to openly communicate their concerns and ideas for improvement.`, 
    `He openly acknowledged his mistakes and took responsibility for the consequences.`,
    `The celebrity decided to openly share their personal struggles to raise awareness and inspire others.`,
    `__`,
     ],
  },
  {
    word: 'oust',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The shareholders voted to oust the CEO due to allegations of misconduct.`, 
    `The political party launched a campaign to oust the incumbent government in the upcoming elections.`, 
    `The board of directors decided to oust the underperforming executive from the company.`,
    `The team was determined to oust their rival from the top position in the league standings.`,
    `__`,
     ],
  },
  {
    word: 'outfit',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She wore a stylish outfit to the party, receiving compliments from everyone.`, 
    `The explorers packed their backpacks with essential items to outfit themselves for the challenging expedition.`, 
    `The fashion brand offered a wide range of outfits to cater to different styles and preferences.`,
    `The team received sponsorship from a sports apparel company to provide them with matching outfits for competitions.`,
    `__`,
     ],
  },
  {
    word: 'outgoing',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He had an outgoing personality and easily made friends wherever he went.`, 
    `The outgoing president delivered a farewell speech, expressing gratitude for the support received during their term.`, 
    `She took on the role of an outgoing ambassador, promoting cultural exchange and diplomatic relations.`,
    `The outgoing tide revealed a hidden pathway along the shore, opening up new exploration opportunities.`,
    `__`,
     ],
  },
  {
    word: 'outlet',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The new shopping mall became a popular outlet for fashion enthusiasts.`, 
    `He used painting as an outlet for his emotions, expressing himself through art.`, 
    `The power outlet in the wall stopped working, requiring an electrician to fix it.`,
    `The outlet store offered discounted prices on designer goods, attracting bargain shoppers.`,
    `__`,
     ],
  },
  {
    word: 'outright',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She rejected the offer outright, as it did not align with her career goals.`, 
    `The company made an outright donation to the charitable organization, supporting their cause.`, 
    `He expressed his outright disagreement with the proposed changes during the meeting.`,
    `The athlete won the race outright, leaving no doubt about their victory.`,
    `__`,
     ],
  },
  {
    word: 'overall',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The overall performance of the team was exceptional, resulting in a championship win.`, 
    `The survey showed that overall customer satisfaction had improved compared to the previous year.`, 
    `She was pleased with her overall progress in learning a new language.`,
    `The overall design of the building was modern and aesthetically pleasing.`,
    `__`,
     ],
  },
  {
    word: 'overcast',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The sky was overcast with dark clouds, indicating the approach of a storm.`, 
    `The weather forecast predicted an overcast day with a chance of light rain.`, 
    `The beach was less crowded due to the overcast conditions, offering a peaceful atmosphere.`,
    `The photographer preferred shooting on overcast days for softer lighting and more even tones.`,
    `__`,
     ],
  },
  {
    word: 'overly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He was overly cautious and double-checked everything to avoid making mistakes.`, 
    `The teacher criticized the student for being overly reliant on their peers for completing assignments.`, 
    `She found the movie to be overly long, with unnecessary scenes that dragged the story.`,
    `The company received complaints from customers about the overly complicated user interface of their new software.`,
    `__`,
     ],
  },
  {
    word: 'pastime',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Reading books is her favorite pastime, allowing her to escape into different worlds.`, 
    `He enjoyed gardening as a relaxing pastime, tending to his plants and flowers.`,
    `Playing chess became a popular pastime among the elderly in the community center.`,
    `The painting class provided a creative pastime for those looking to explore their artistic skills.`,
     ],
  },
  {
    word: 'paternity_leave',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company introduced a new policy to offer paternity leave, recognizing the importance of fathers' involvement in childcare.`, 
    `He took paternity leave to spend quality time with his newborn baby and support his partner.`, 
    `The government extended the duration of paternity leave to encourage equal parenting responsibilities.`,
    `The employee was excited to take advantage of the paternity leave benefits provided by his employer.`,
    `__`,
     ],
  },
  {
    word: 'payee',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The payee received the payment for their services promptly and expressed their satisfaction.`, 
    `The bank requires the payee's information to process the transfer of funds.`, 
    `The check was made payable to the payee specified on the document.`,
    `The payee was responsible for endorsing the check before depositing it into their bank account.`,
    `__`,
     ],
  },
  {
    word: 'perception',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Her perception of the situation was influenced by her past experiences.`, 
    `The artist's paintings challenged the viewer's perception of reality.`, 
    `The public's perception of the company changed after they implemented sustainable practices.`,
    `The marketing campaign aimed to improve brand perception and attract a younger audience.`,
    `__`,
     ],
  },
  {
    word: 'perceptive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She had a perceptive mind and quickly noticed subtle changes in people's behavior.`, 
    `The detective's perceptive skills helped solve the complex case.`, 
    `The perceptive teacher recognized the student's potential and encouraged their creative pursuits.`,
    `He was known for his perceptive analysis of economic trends, providing valuable insights to investors.`,
    `__`,
     ],
  },
  {
    word: 'periodically',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The car needs to be serviced periodically to ensure optimal performance.`, 
    `The company conducts meetings periodically to review progress and address any issues.`, 
    `The newsletter is sent out periodically to keep subscribers updated on the latest news.`,
    `She visits her family periodically throughout the year to maintain close connections.`,
    `__`,
     ],
  },
  {
    word: 'persecute',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The religious minority faced persecution in the oppressive regime.`, 
    `He was falsely accused of a crime and subjected to years of persecution.`, 
    `The author's controversial book led to her being persecuted by certain groups.`,
    `The activist dedicated her life to fighting for the rights of persecuted individuals.`,
    `__`,
     ],
  },
  {
    word: 'personality',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Her outgoing personality made her the life of the party.`, 
    `He has a charismatic personality that attracts people wherever he goes.`, 
    `The psychologist studied the correlation between personality traits and behavior patterns.`,
    `Each person has a unique personality shaped by their experiences and upbringing.`,
    `__`,
     ],
  },
  {
    word: 'perspective',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She offered a different perspective on the issue, shedding light on alternative solutions.`, 
    `The historical event was presented from the perspective of multiple eyewitnesses.`, 
    `Traveling to different countries gave him a broader perspective on cultural diversity.`,
    `The therapy sessions helped her gain a new perspective on her challenges.`,
    `__`,
     ],
  },
  {
    word: 'pertinent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The information shared in the meeting was pertinent to the ongoing project.`, 
    `The lawyer asked pertinent questions to build a strong case for the defense.`, 
    `The article provided pertinent advice for managing stress in the workplace.`,
    `She conducted thorough research to gather pertinent data for her scientific study.`,
    `__`,
     ],
  },
  {
    word: 'pessimistic',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Despite the positive outcome, he remained pessimistic about the future.`, 
    `The pessimistic forecast predicted a decline in economic growth.`, 
    `She had a pessimistic view of relationships due to past heartbreaks.`,
    `The coach tried to motivate the team and shift their pessimistic mindset.`,
    `__`,
     ],
  },
  {
    word: 'petition',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The citizens started a petition to protest against the construction of a new landfill.`, 
    `The online petition garnered thousands of signatures within a few days.`, 
    `The student council presented a petition to the school administration, advocating for better facilities.`,
    `The organization launched a petition to raise awareness about endangered species.`,
    `__`,
     ],
  },
  {
    word: 'petitioner',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The petitioner addressed the court with their grievances and demanded justice.`, 
    `The petitioner's lawyer presented a strong case in support of their claims.`, 
    `The board listened to the concerns raised by the petitioner and promised to take action.`,
    `The petitioner's emotional plea moved the audience and highlighted the urgency of the issue.`,
    `__`,
     ],
  },
  {
    word: 'philanthropist',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The wealthy businessman became a philanthropist and donated a significant amount to various charities.`, 
    `The philanthropist established a foundation to support education and healthcare initiatives.`, 
    `The community recognized the philanthropist's contributions with a special award ceremony.`,
    `The philanthropist's generosity changed the lives of many underprivileged individuals.`,
    `__`,
     ],
  },
  {
    word: 'pioneer',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She was a pioneer in the field of biotechnology, revolutionizing medical research.`, 
    `The company was a pioneer in developing sustainable energy solutions.`, 
    `The explorer's courage and determination made him a pioneer of Arctic exploration.`,
    `The artist's unique style and techniques made her a pioneer in the art world.`,
    `__`,
     ],
  },
  {
    word: 'plays_the_part_of',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He plays the part of the villain in the upcoming theater production.`, 
    `The politician's charismatic speeches aimed to play the part of a unifying leader.`, 
    `She plays the part of a loving mother in the popular TV series.`,
    `The actor's ability to fully immerse himself in a character allows him to convincingly play the part of diverse roles.`,
    `__`,
     ],
  },
  {
    word: 'pleasant',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The park provides a pleasant environment for people to relax and enjoy nature.`, 
    `The hotel staff greeted us with a pleasant smile and warm hospitality.`, 
    `She had a pleasant conversation with her neighbor during their morning walk.`,
    `The fresh scent of flowers made the garden a pleasant place to spend time.`,
    `__`,
     ],
  },
  {
    word: 'pledge',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The students took a pledge to maintain cleanliness in their school.`, 
    `He made a pledge to himself to work harder and achieve his goals.`,
    `The political candidate made a pledge to prioritize healthcare reform if elected.`,
    `The organization received a significant financial pledge from a generous donor.`,
     ],
  },
  {
    word: 'plummet',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The stock prices plummeted after the company announced disappointing earnings.`, 
    `The temperature plummeted overnight, causing a sudden drop in weather conditions.`, 
    `The athlete's performance plummeted due to a lack of training.`,
    `The team's morale plummeted after a series of consecutive losses.`,
    `__`,
     ],
  },
  {
    word: 'podium',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The athlete proudly stood on the podium, receiving the gold medal.`, 
    `The speaker confidently addressed the audience from the podium.`, 
    `The politician's speech from the podium ignited a sense of hope among the crowd.`,
    `The award ceremony concluded with all the winners standing on the podium.`,
    `__`,
     ],
  },
  {
    word: 'political',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The country experienced a period of political unrest following the disputed election.`, 
    `The political candidate campaigned on a platform of economic reform.`, 
    `The political party proposed new legislation to address social inequality.`,
    `The media closely followed the political developments in the capital.`,
    `__`,
     ],
  },
  {
    word: 'pollute',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Factory emissions are known to pollute the air and contribute to environmental degradation.`, 
    `The illegal dumping of waste polluted the nearby river, affecting aquatic life.`, 
    `The use of plastic bags contributes to polluting our oceans and harming marine ecosystems.`,
    `Efforts are being made to reduce plastic waste and limit the pollution caused by single-use items.`,
    `__`,
     ],
  },
  {
    word: 'porter',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The porter helped carry the heavy luggage up to the hotel room.`, 
    `The porter at the train station assisted passengers with their belongings.`, 
    `The porter greeted guests at the entrance of the luxury hotel.`,
    `The porter's friendly demeanor made the guests feel welcome.`,
    `__`,
     ],
  },
  {
    word: 'portion',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She only ate a small portion of the meal, saving the rest for later.`, 
    `The chef carefully plated each portion of the dish before serving it to the guests.`, 
    `The restaurant offers generous portions of their signature desserts.`,
    `The teacher divided the class into groups, assigning a specific portion of the project to each group.`,
    `__`,
     ],
  },
  {
    word: 'possession',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He cherished the family heirloom as it held sentimental value and was a precious possession.`, 
    `The house was listed for sale, and potential buyers expressed interest in acquiring the possession.`, 
    `The artist's painting became a highly sought-after possession among art collectors.`,
    `The company took possession of the new office space and began setting up the workstations.`,
    `__`,
     ],
  },
  {
    word: 'poverty-stricken',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The charity organization provided assistance to the poverty-stricken community.`, 
    `The documentary shed light on the struggles faced by poverty-stricken families.`, 
    `The government implemented policies to alleviate poverty and uplift the poverty-stricken regions.`,
    `The non-profit organization aimed to empower and support poverty-stricken individuals.`,
    `__`,
     ],
  },
  {
    word: 'practical',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She chose a practical car that was fuel-efficient and had low maintenance costs.`, 
    `The student selected practical clothing for the field trip, considering the weather and activities.`, 
    `The engineer proposed a practical solution to improve the efficiency of the manufacturing process.`,
    `The workshop provided practical tips and techniques for effective time management.`,
    `__`,
     ],
  },
  {
    word: 'praise',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The teacher praised the student for their exceptional academic performance.`, 
    `The author's latest novel received high praise from literary critics.`, 
    `The team's hard work and dedication earned them praise from the coach.`,
    `The musician's performance was met with enthusiastic praise from the audience.`,
    `__`,
     ],
  },
  {
    word: 'precedent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The court's decision set a precedent for future similar cases.`, 
    `The company's innovative approach to customer service created a new precedent in the industry.`, 
    `The student's achievement served as a precedent for others to strive for excellence.`,
    `The new policy deviated from the established precedent, causing controversy.`,
    `__`,
     ],
  },
  {
    word: 'precise',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The surgeon performed the delicate procedure with precise precision.`, 
    `The architect drew up a precise blueprint for the construction project.`,
    `The researcher collected and analyzed data with precise accuracy.`,
    `The teacher provided precise instructions to the students for the science experiment.`,
     ],
  },
  {
    word: 'preclude',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The rainy weather precluded us from having a picnic in the park.`, 
    `The lack of funding precluded the implementation of the proposed project.`, 
    `The security measures in place helped preclude unauthorized access to the building.`,
    `The signed contract precluded any further negotiations on the terms.`,
    `__`,
     ],
  },
  {
    word: 'premises',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Visitors are required to sign in when entering the company premises.`, 
    `The fire alarm went off, and everyone quickly evacuated the premises.`, 
    `The store owner invested in security cameras to protect the premises from theft.`,
    `The premises of the old factory were repurposed into a vibrant art gallery.`,
    `__`,
     ],
  },
  {
    word: 'prerequisite',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Completion of the introductory course is a prerequisite for enrolling in the advanced level.`, 
    `A bachelor's degree is often a prerequisite for certain professional positions.`, 
    `The job application required candidates to possess specific prerequisite skills.`,
    `The project manager emphasized the importance of meeting all the prerequisites before starting the project.`,
    `__`,
     ],
  },
  {
    word: 'presentable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She made sure to dress in a presentable manner for the job interview.`, 
    `The team worked together to make the event venue look presentable.`, 
    `The student's presentation was well-prepared and visually presentable.`,
    `The company implemented a dress code to ensure employees appeared presentable to clients.`,
    `__`,
     ],
  },
  {
    word: 'primarily',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company's business model primarily focuses on sustainability and environmental responsibility.`, 
    `The festival primarily features local artists and musicians.`, 
    `The study's findings indicate that diet and exercise are primarily responsible for weight loss.`,
    `The company's primary objective is to provide high-quality customer service.`,
    `__`,
     ],
  },
  {
    word: 'principal',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The principal of the school addressed the students during the morning assembly.`, 
    `She is the principal architect responsible for designing the new building.`, 
    `The principal amount of the loan must be repaid in monthly installments.`,
    `The principal investor in the project withdrew their support, causing delays.`,
    `__`,
     ],
  },
  {
    word: 'proceeds',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The proceeds from the charity auction will go towards funding medical research.`, 
    `The book's author generously donated a portion of the proceeds to a local charity.`, 
    `The proceeds of the fundraising event exceeded expectations, allowing for additional community programs.`,
    `The business owner decided to reinvest the proceeds back into the company for expansion.`,
    `__`,
     ],
  },
  {
    word: 'procrastinate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He tends to procrastinate and leaves tasks until the last minute.`, 
    `The student's tendency to procrastinate resulted in late submissions and lower grades.`, 
    `She made a conscious effort to overcome her habit of procrastinating by setting deadlines and creating a schedule.`,
    `Procrastination can lead to increased stress and decreased productivity.`,
    `__`,
     ],
  },
  {
    word: 'productive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The team had a highly productive meeting, reaching several important decisions.`, 
    `She dedicated focused time to her work and had a productive day.`, 
    `The company implemented new strategies to boost productivity in the workplace.`,
    `Regular exercise and a balanced diet can contribute to overall physical and mental productivity`,
    `__`,
     ],
  },
  {
    word: 'profitably',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company successfully expanded its operations and grew profitably.`, 
    `The entrepreneur launched a new product that quickly became a profitably selling item.`, 
    `The real estate investment proved to be profitably lucrative for the investor.`,
    `The business consultant provided strategies for effectively and profitably managing cash flow.`,
    `__`,
     ],
  },
  {
    word: 'progressive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The organization aims to create a progressive work environment that promotes diversity and inclusion.`, 
    `The country's new policies reflect a progressive approach to social issues.`, 
    `The company's progressive stance on sustainable practices sets an example for other industries.`,
    `The school implemented a progressive curriculum that incorporates technology and interactive learning.`,
    `__`,
     ],
  },
  {
    word: 'promptly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The customer service representative responded promptly to the inquiry and resolved the issue.`, 
    `He always pays his bills promptly to avoid late fees.`, 
    `The delivery arrived promptly at the designated time.`,
    `The supervisor commended the employee for consistently completing tasks promptly.`,
    `__`,
     ],
  },
  {
    word: 'proportion',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The recipe calls for equal proportions of flour and sugar.`, 
    `The artist carefully considered the proportion of elements in the composition to create a balanced artwork.`, 
    `The project's budget allocation was adjusted to ensure the proper proportion of funds for each phase.`,
    `The sales team analyzed the market share and identified opportunities to increase their proportion of customers.`,
    `__`,
     ],
  },
  {
    word: 'proposal',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The business owner presented a proposal for a new marketing strategy.`, 
    `The government received multiple proposals from contractors bidding for the construction project.`, 
    `He got down on one knee and made a romantic proposal of marriage.`,
    `The committee reviewed the research proposal and provided feedback for improvement.`,
    `__`,
     ],
  },
  {
    word: 'prosecute',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The district attorney decided to prosecute the suspect for the alleged crime.`, 
    `The company decided to prosecute the individual responsible for embezzlement.`, 
    `The legal team gathered evidence to prepare for the trial and prosecute the accused.`,
    `The police diligently investigated the case to build a strong case for prosecution.`,
    `__`,
     ],
  },
  {
    word: 'prospect',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She is excited about the prospect of starting her own business.`, 
    `The company is actively seeking new prospects for partnership and expansion.`, 
    `The real estate agent showed them several promising prospects for their new home.`,
    `The job candidate had an impressive resume and showed great prospects for the position.`,
    `__`,
     ],
  },
  {
    word: 'prospective',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The university hosted an event for prospective students to learn more about the programs offered.`, 
    `The company conducted interviews with prospective employees for the open positions.`, 
    `The real estate agent provided a tour of the property to prospective buyers.`,
    `The business owner prepared a presentation to pitch the company's services to prospective clients.`,
    `__`,
     ],
  },
  {
    word: 'protest',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The citizens gathered in the streets to protest against government policies.`, 
    `The workers organized a protest to demand fair wages and better working conditions.`, 
    `The environmental activists held a peaceful protest to raise awareness about climate change.`,
    `The student-led movement staged a protest against the proposed tuition fee increase.`,
    `__`,
     ],
  },
  {
    word: 'provision',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The contract includes a provision for early termination.`, 
    `The hotel provides complimentary breakfast as part of their service provision.`, 
    `The law requires employers to make provisions for employee safety.`,
    `The emergency management team made provisions for shelter and supplies during the hurricane.`,
    `__`,
     ],
  },
  {
    word: 'proximity',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The house is located in close proximity to the beach.`, 
    `The new office building is in proximity to public transportation, making it convenient for employees.`, 
    `Living in proximity to a park allows for easy access to recreational activities.`,
    `The hotel was chosen for its proximity to the conference venue.`,
    `__`,
     ],
  },
  {
    word: 'purely',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Her decision to pursue art was purely based on her passion for creativity.`, 
    `The investment was purely a financial decision with no emotional attachment.`, 
    `The company's goal is purely to provide excellent customer service.`,
    `He made the decision purely out of self-interest, without considering the consequences for others.`,
    `__`,
     ],
  },
  {
    word: 'pursue',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She decided to pursue a career in medicine to help others.`, 
    `The company is actively pursuing new business opportunities in international markets.`, 
    `Despite the challenges, he remained determined to pursue his dreams.`,
    `The athlete trained rigorously to pursue a spot on the national team.`,
    `__`,
     ],
  },
  {
    word: 'reconcile',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They had a disagreement, but they were able to reconcile their differences and maintain their friendship.`, 
    `The therapist helped the couple reconcile their relationship after a period of conflict.`, 
    `It can be challenging to reconcile work obligations with personal commitments.`,
    `The company made efforts to reconcile its financial records and resolve discrepancies.`,
    `__`,
     ],
  },
  {
    word: 'reconvene',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After a short break, the meeting will reconvene in the boardroom.`, 
    `The committee decided to reconvene next week to finalize their recommendations.`, 
    `The conference will reconvene in the afternoon with a panel discussion.`,
    `The team leader called for a recess before reconvening to discuss the next steps.`,
    `__`,
     ],
  },
  {
    word: 'rectify',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company quickly rectified the error in the customer's order and offered a refund.`, 
    `The supervisor took immediate action to rectify the safety issue in the workplace.`,
    `The government implemented new policies to rectify the economic downturn.`,
    `The teacher provided feedback to help the student rectify mistakes in their essay.`,
     ],
  },
  {
    word: 'refrigerate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It is important to refrigerate perishable food items to prevent spoilage.`, 
    `The recipe calls for the dough to be refrigerated for at least two hours.`, 
    `The restaurant has a large walk-in refrigerator to store fresh ingredients.`,
    `The pharmacist instructed the patient to refrigerate the medication to maintain its effectiveness.`,
    `__`,
     ],
  },
  {
    word: 'refuse',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He refused to accept the job offer because the salary was too low.`, 
    `The restaurant refused service to customers who were not wearing masks.`, 
    `The student refused to cheat on the exam, even though others were doing so.`,
    `The company refused to compromise on its core values, even in challenging situations.`,
    `__`,
     ],
  },
  {
    word: 'regard',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She is highly regarded in her field for her expertise and contributions.`, 
    `The team's success is held in high regard by the company's leadership.`, 
    `In many cultures, it is important to show respect and regard for elders.`,
    `The manager made it a point to show regard for the opinions and ideas of all team members.`,
    `__`,
     ],
  },
  {
    word: 'regardless',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He continued to pursue his goals regardless of the challenges he faced.`, 
    `The company implemented the new policy regardless of employee objections.`, 
    `Regardless of the weather, the event will take place as scheduled.`,
    `The team remained focused on the project, regardless of distractions and setbacks.`,
    `__`,
     ],
  },
  {
    word: 'reimburse',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company agreed to reimburse me for the travel expenses I incurred during the business trip.`, 
    `Please keep the receipts for your purchases so that we can reimburse you later.`, 
    `The insurance company will reimburse you for the damage caused to your car.`,
    `I will reimburse you for the dinner; it was my treat.`,
    `__`,
     ],
  },
  {
    word: 'relieved',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After a long day at work, she felt relieved to finally relax at home.`, 
    `He was relieved to hear that his loved ones were safe after the accident.`, 
    `The students were relieved when the difficult exam was over.`,
    `I'm relieved that the problem was resolved before it caused further complications.`,
    `__`,
     ],
  },
  {
    word: 'relinquish',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She decided to relinquish her position as the team leader due to personal reasons.`, 
    `The artist was reluctant to relinquish ownership of his artwork.`, 
    `The landlord asked the tenant to relinquish the keys to the property.`,
    `The company was forced to relinquish its control over the project.`,
    `__`,
     ],
  },
  {
    word: 'reluctant',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He was reluctant to accept the job offer because it required relocation.`, 
    `The child was reluctant to try new foods and stuck to familiar dishes.`, 
    `She was reluctant to ask for help, but eventually realized she couldn't do it alone.`,
    `The team was initially reluctant to embrace the new strategy, but later saw its benefits.`,
    `__`,
     ],
  },
  {
    word: 'remarkable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The team's performance in the championship was remarkable; they exceeded everyone's expectations.`, 
    `Her ability to learn languages quickly is truly remarkable.`, 
    `The artist's attention to detail in their paintings is remarkable.`,
    `The novel tells a remarkable story of resilience and triumph.`,
    `__`,
     ],
  },
  {
    word: 'remittance',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He sent a remittance to his family back home to support them financially.`, 
    `The company offers multiple options for international remittance.`, 
    `The remittance arrived safely in the recipient's bank account.`,
    `She received a remittance from a relative as a gift.`,
    `__`,
     ],
  },
  {
    word: 'reportedly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Reportedly, the company is planning to expand its operations in the coming year.`, 
    `The movie, reportedly based on a true story, received mixed reviews from critics.`, 
    `The prices of fuel are reportedly set to increase next month.`,
    `Reportedly, the singer will be releasing a new album in the fall.`,
    `__`,
     ],
  },
  {
    word: 'reporter',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The reporter interviewed the mayor about the recent policy changes.`, 
    `The reporter filed a story on the local election results.`, 
    `The investigative reporter uncovered corruption within the government.`,
    `The sports reporter provided live updates from the championship game.`,
    `__`,
     ],
  },
  {
    word: 'reprimand',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The teacher gave the student a reprimand for not completing their homework.`, 
    `The manager delivered a stern reprimand to the employee for their unprofessional behavior.`, 
    `He received a reprimand from his parents for coming home late.`,
    `The boss issued a written reprimand to address the employee's repeated tardiness.`,
    `__`,
     ],
  },
  {
    word: 'reserve',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They reserved a table at the restaurant for their anniversary dinner.`, 
    `She had to reserve her energy for the upcoming marathon.`, 
    `The hotel requires guests to reserve a room in advance.`,
    `The company has a reserve fund for unexpected expenses.`,
    `__`,
     ],
  },
  {
    word: 'reserved',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She is known for being reserved and keeping her thoughts to herself.`, 
    `The reserved seating section at the theater offers a more comfortable experience.`, 
    `He appeared reserved during the meeting, carefully choosing his words.`,
    `The shy student often sat in the back of the classroom, trying to remain reserved.`,
    `__`,
     ],
  },
  {
    word: 'resist',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She tried to resist the temptation to eat the chocolate cake.`, 
    `The protesters refused to back down and continued to resist the government's policies.`, 
    `He had to resist the urge to react angrily to the criticism.`,
    `The material is designed to resist water and moisture.`,
    `__`,
     ],
  },
  {
    word: 'resolution',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She made a New Year's resolution to exercise more regularly.`, 
    `The company implemented a resolution to reduce its carbon footprint.`, 
    `They reached a resolution to the dispute through mediation.`,
    `He approached the problem with determination and resolution.`,
    `__`,
     ],
  },
  {
    word: 'restriction',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The park has imposed restrictions on bringing pets inside.`, 
    `There are restrictions on the use of cell phones during the exam.`, 
    `The doctor advised him to follow dietary restrictions to improve his health.`,
    `The government imposed travel restrictions due to the pandemic.`,
    `__`,
     ],
  },
  {
    word: 'retrace',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He tried to retrace his steps to find his lost keys.`, 
    `The detective had to retrace the victim's movements to solve the crime.`, 
    `The historian carefully retraced the events leading up to the war.`,
    `She retraced the route she took on her last vacation to relive the memories.`,
    `__`,
     ],
  },
  {
    word: 'ride',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They went for a relaxing bike ride along the scenic trail.`, 
    `He offered her a ride home after the party.`,
    `She enjoyed the thrilling roller coaster ride at the amusement park.`,
    `They took a horseback ride through the countryside.`,
     ],
  },
  {
    word: 'ridiculous',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `His excuses for being late were absolutely ridiculous.`, 
    `The price they were asking for the old car was simply ridiculous.`, 
    `The comedian had the audience in stitches with their ridiculous jokes.`,
    `The plot of the movie was so absurd that it became ridiculous.`,
    `__`,
     ],
  },
  {
    word: 'rude',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He was reprimanded for his rude behavior towards the restaurant staff.`, 
    `The customer complained about the rude treatment they received from the salesperson.`, 
    `She found his comments to be disrespectful and rude.`,
    `The teacher reminded the students to be polite and not engage in rude behavior.`,
    `__`,
     ],
  },
  {
    word: 'run_into',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `I ran into an old friend from high school at the grocery store yesterday.`, 
    `Be careful when you're driving, you don't want to run into any traffic.`, 
    `As I was walking down the street, I accidentally ran into a lamppost.`,
    `He was in a hurry and didn't see the sign, causing him to run into the closed door.`,
    `__`,
     ],
  },
  {
    word: 'run_out',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `We need to go to the store soon because we're running out of milk.`, 
    `I forgot to check the gas level, and now we've run out in the middle of the road.`, 
    `She realized she had run out of paper just before the important presentation.`,
    `Don't forget to restock the office supplies before they run out.`,
    `__`,
     ],
  },
  {
    word: 'runway',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The model confidently walked down the runway, showcasing the latest fashion designs.`, 
    `The airport has a long runway to accommodate large aircraft.`, 
    `The pilot smoothly landed the plane on the runway.`,
    `The fashion show on the airport runway was a unique and creative concept.`,
    `__`,
     ],
  },
  {
    word: 'satisfactory',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The quality of the work was satisfactory, but there is room for improvement.`, 
    `The restaurant offered a satisfactory dining experience with attentive service.`, 
    `She received a satisfactory grade on her final exam after studying diligently.`,
    `The contractor completed the job to the client's satisfactory level of expectation.`,
    `__`,
     ],
  },
  {
    word: 'savings_account',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It's important to save money for the future, so I opened a savings account.`, 
    `She deposits a portion of her paycheck into her savings account every month.`, 
    `The bank offers a high-interest savings account for long-term saving goals.`,
    `He was relieved to see the growing balance in his savings account.`,
    `__`,
     ],
  },
  {
    word: 'savor',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She took a moment to savor the delicious flavor of the homemade pie.`, 
    `After a long day, I like to savor a hot cup of tea.`, 
    `They spent their vacation savoring the breathtaking views of the mountains.`,
    `The chef encouraged the diners to savor each bite of the gourmet meal.`,
    `__`,
     ],
  },
  {
    word: 'scheduled',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The meeting is scheduled for tomorrow afternoon at 2 p.m.`, 
    `She has a busy day with back-to-back scheduled appointments.`, 
    `The airline announced that the flight has been rescheduled due to weather conditions.`,
    `The project timeline is carefully scheduled to ensure timely completion.`,
    `__`,
     ],
  },
  {
    word: 'scold',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The teacher scolded the student for not completing the homework assignment.`, 
    `The parent scolded their child for breaking a valuable vase.`, 
    `He scolded himself for forgetting an important appointment.`,
    `The coach scolded the team for their lack of effort during the game.`,
    `__`,
     ],
  },
  {
    word: 'scratch',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The cat loves it when you scratch behind its ears.`, 
    `Be careful not to scratch the surface of the table with that sharp object.`, 
    `I accidentally scratched my phone screen, and now there's a visible mark.`,
    `He used a coin to scratch off the protective coating on the lottery ticket.`,
    `__`,
     ],
  },
  {
    word: 'screen',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They watched a movie on the big screen at the cinema.`, 
    `The doctor recommended regular screening for early detection of the disease.`, 
    `She used a privacy screen on her computer to prevent others from seeing her work.`,
    `The security guard checked the visitors' bags using a metal detector screen.`,
    `__`,
     ],
  },
  {
    word: 'screening',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The film festival featured a special screening of the highly anticipated movie.`, 
    `The company conducted a thorough screening of job applicants before making a hiring decision.`, 
    `The health center offers free screening for various diseases.`,
    `The airport implemented additional security screening measures to ensure passenger safety.`,
    `__`,
     ],
  },
  {
    word: 'scrutinize',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The detective scrutinized the evidence carefully to solve the crime.`, 
    `The professor scrutinized the students' essays to evaluate their understanding of the topic.`, 
    `The journalist scrutinized the politician's speech for any inconsistencies or misleading statements.`,
    `She scrutinized her reflection in the mirror, making sure every detail was perfect.`,
    `__`,
     ],
  },
  {
    word: 'scrutiny',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company's financial statements are under scrutiny by auditors.`, 
    `The government's policy decisions are subject to public scrutiny.`, 
    `The research findings were subjected to rigorous scrutiny by peer reviewers.`,
    `The athlete's performance came under scrutiny after accusations of doping.`,
    `__`,
     ],
  },
  {
    word: 'seasonal_work',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Many people take up seasonal work during the holiday season to earn extra income.`, 
    `The agricultural industry often relies on seasonal workers to harvest crops.`, 
    `The ski resort hires seasonal workers to handle the influx of visitors during the winter.`,
    `She enjoys the flexibility of seasonal work as it allows her to pursue other interests during the rest of the year.`,
    `__`,
     ],
  },
  {
    word: 'separately',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The items should be packed separately to prevent damage during transit.`, 
    `The twins are so similar that it's difficult to tell them apart when they're not dressed separately.`, 
    `The manager scheduled individual meetings to discuss each team member's performance separately.`,
    `She prefers to keep her personal and professional lives separate.`,
    `__`,
     ],
  },
  {
    word: 'sequester',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The jury was sequestered during the high-profile trial to ensure impartiality.`, 
    `The family decided to sequester themselves in a remote cabin for a peaceful vacation.`, 
    `The company sequestered a portion of its profits for future investments.`,
    `The scientist was sequestered in the lab, working tirelessly on groundbreaking research.`,
    `__`,
     ],
  },
  {
    word: 'settle',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After a long negotiation, they were able to settle on a fair price for the house.`, 
    `He decided to settle the dispute with his neighbor through mediation.`, 
    `She hopes to settle down and start a family in her hometown.`,
    `The company reached a settlement with the disgruntled employees to avoid a legal battle.`,
    `__`,
     ],
  },
  {
    word: 'severe',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The region experienced severe weather conditions, including heavy storms and strong winds.`, 
    `He suffered a severe injury during the accident and had to undergo surgery.`, 
    `The government imposed severe penalties for tax evasion.`,
    `The doctor expressed concern over the severe symptoms of the patient's illness.`,
    `__`,
     ],
  },
  {
    word: 'severity',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The severity of the crime led to a lengthy prison sentence.`, 
    `The severity of the drought resulted in water rationing measures.`, 
    `The doctor explained the severity of the patient's condition to their family.`,
    `The severity of the impact caused significant damage to the vehicle`,
    `__`,
     ],
  },
  {
    word: 'sewage',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The city's sewage system underwent major repairs to prevent contamination.`, 
    `The pollution in the river was caused by untreated sewage being dumped into it.`, 
    `The plumber was called to fix a blockage in the sewage pipe.`,
    `The beach was temporarily closed due to sewage contamination.`,
    `__`,
     ],
  },
  {
    word: 'shares',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He decided to invest in shares of a promising technology company.`, 
    `The company issued new shares to raise capital for expansion.`, 
    `She inherited a significant number of shares in a multinational corporation.`,
    `The stock market experienced a surge in shares of renewable energy companies.`,
    `__`,
     ],
  },
  {
    word: 'shattered',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The glass vase slipped from her hands and shattered into pieces on the floor.`, 
    `He was devastated when his dreams of becoming a professional athlete were shattered by an injury.`, 
    `The news of the scandal shattered the public's trust in the company.`,
    `The car accident left the windshield shattered and the vehicle in ruins.`,
    `__`,
     ],
  },
  {
    word: 'shed',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The dog sheds its fur heavily during the summer months.`, 
    `He decided to shed some unnecessary belongings during the move.`, 
    `The snake shed its skin as part of its natural growth process.`,
    `The tree shed its leaves in the autumn.`,
    `__`,
     ],
  },
  {
    word: 'shortage',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `There is a shortage of skilled workers in the construction industry.`, 
    `The drought resulted in a shortage of water supply in the region.`, 
    `The pandemic caused a shortage of essential medical supplies.`,
    `The store experienced a shortage of popular products during the holiday season.`,
    `__`,
     ],
  },
  {
    word: 'shovel',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He used a shovel to clear the snow from the driveway after the winter storm.`, 
    `The gardener used a shovel to dig a hole for planting the new tree.`, 
    `She grabbed a shovel and started digging in the garden to plant vegetables.`,
    `The construction workers used shovels to move dirt and debris from the construction site.`,
    `__`,
     ],
  },
  {
    word: 'shuttle',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The airport offers a shuttle service to transport passengers between the terminals and parking areas.`, 
    `She took a shuttle bus from the hotel to the conference center.`, 
    `The company operates a shuttle service for employees commuting from the nearby train station.`,
    `The space shuttle launched into orbit with a crew of astronauts on board.`,
    `__`,
     ],
  },
  {
    word: 'sightseeing',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They spent the day sightseeing, visiting famous landmarks and museums.`, 
    `The tour guide provided interesting facts and anecdotes during the sightseeing tour.`, 
    `We took a sightseeing cruise along the river to enjoy the scenic views of the city.`,
    `Sightseeing is a popular activity for tourists to explore a new destination.`,
    `__`,
     ],
  },
  {
    word: 'silly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The children laughed at the silly jokes told by the clown at the circus.`, 
    `She couldn't help but feel silly wearing a costume to the costume party.`, 
    `It was a silly mistake to forget the keys inside the locked car.`,
    `He made a silly face to make his friends laugh.`,
    `__`,
     ],
  },
  {
    word: 'situated',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The hotel is conveniently situated in the heart of the city, close to major attractions.`, 
    `Their house is situated on a hill, offering breathtaking views of the surrounding landscape.`, 
    `The school is situated near the park, providing a peaceful environment for the students.`,
    `The restaurant is situated next to the beach, offering a stunning ocean view.`,
    `__`,
     ],
  },
  {
    word: 'skewed_distorted',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The study found that the data had been skewed by a small sample size.`, 
    `The perception of beauty in society is often skewed by unrealistic media standards.`, 
    `His biased opinion skewed the results of the survey.`,
    `The artist used a unique technique to create a skewed perspective in the painting.`,
    `__`,
     ],
  },
  {
    word: 'ski',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They went to the mountains to ski during the winter vacation.`, 
    `She enrolled in ski lessons to improve her skills on the slopes.`, 
    `The ski resort offers a variety of slopes for skiers of all levels.`,
    `He enjoys the adrenaline rush of skiing down steep slopes.`,
    `__`,
     ],
  },
  {
    word: 'slightly',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The temperature dropped slightly, making the weather more comfortable.`, 
    `She was slightly late for the meeting due to heavy traffic.`, 
    `The coffee was slightly too hot to drink right away.`,
    `He felt slightly nervous before his presentation.`,
    `__`,
     ],
  },
  {
    word: 'sluggish',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After a long day at work, he felt sluggish and lacked energy.`, 
    `The computer was running sluggish, so he decided to restart it.`,
    `The economy experienced a sluggish growth rate in the past year.`,
    `The hot weather made everyone feel sluggish and lethargic.`,
     ],
  },
  {
    word: 'soar',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The bird spread its wings and soared gracefully in the sky.`, 
    `The stock prices soared after the positive earnings report.`, 
    `Her spirits soared when she received the acceptance letter from her dream university.`,
    `The kite soared high above the beach on a windy day.`,
    `__`,
     ],
  },
  {
    word: 'sole',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She was the sole survivor of the plane crash.`, 
    `He is the sole owner of the company.`, 
    `The sole purpose of the meeting was to discuss the new project.`,
    `The shoes had a worn-out sole and needed to be replaced.`,
    `__`,
     ],
  },
  {
    word: 'sore throat',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She had a sore throat and decided to stay home instead of going to work.`, 
    `Drinking warm tea with honey helped soothe her sore throat.`, 
    `He used throat lozenges to alleviate the pain of his sore throat.`,
    `She visited the doctor when her sore throat persisted for several days.`,
    `__`,
     ],
  },
  {
    word: 'sorts_of',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The store offers all sorts of products, from clothing to electronics.`, 
    `They encountered all sorts of challenges during their adventure trip.`, 
    `The festival attracts all sorts of people, from different backgrounds and interests.`,
    `The library has books of all sorts, catering to various genres and topics.`,
    `__`,
     ],
  },
  {
    word: 'specialized',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He is a specialized surgeon who focuses on cardiovascular diseases.`, 
    `The company offers specialized services tailored to the unique needs of its clients.`, 
    `She pursued further education to become a specialized therapist in her field.`,
    `The research team consisted of specialized experts in different scientific disciplines.`,
    `__`,
     ],
  },
  {
    word: 'species',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The rainforest is home to a wide variety of plant and animal species.`, 
    `Scientists discovered a new species of butterfly in the remote jungle.`, 
    `Endangered species require special protection to prevent their extinction.`,
    `The book provides detailed information about different bird species found in the region.`,
    `__`,
     ],
  },
  {
    word: 'specimen',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The scientist collected a specimen of the rare flower for further analysis.`, 
    `The museum displayed a specimen of the dinosaur fossil found in the excavation.`,
    `The doctor requested a urine specimen for diagnostic purposes.`,
    `The butterfly specimen was carefully mounted and displayed in the glass case.`,
     ],
  },
  {
    word: 'spectacular',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The fireworks display on New Year's Eve was truly spectacular, lighting up the night sky.`, 
    `They went on a hike and were rewarded with spectacular views of the surrounding mountains.`,
    `The acrobats performed a series of spectacular stunts that left the audience in awe.`,
    `The sunset over the ocean was a spectacular sight, with vibrant hues of orange and pink.`,
     ],
  },
  {
    word: 'spontaneous',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They decided to take a spontaneous road trip, packing their bags and hitting the road without a plan.`, 
    `The children broke into spontaneous laughter at the funny antics of the clown.`, 
    `She made a spontaneous decision to quit her job and pursue her passion.`,
    `The couple shared a spontaneous kiss under the starry sky, swept up in the moment.`,
    `__`,
     ],
  },
  {
    word: 'staple',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Rice is a staple food in many Asian countries, forming the basis of their daily meals.`, 
    `The little black dress is considered a staple in every woman's wardrobe.`, 
    `The staple gun is a handy tool for fastening materials together.`,
    `The grocery store offers a wide range of staple items, such as bread, milk, and eggs.`,
    `__`,
     ],
  },
  {
    word: 'stare',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The child stared in amazement at the fireworks display, captivated by the colorful bursts in the sky.`, 
    `She felt uncomfortable under the intense stare of a stranger across the room.`, 
    `He couldn't help but stare at the magnificent painting hanging on the gallery wall.`,
    `The detective stared at the evidence board, trying to piece together the clues.`,
    `__`,
     ],
  },
  {
    word: 'starvation',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The humanitarian organization provided food aid to communities suffering from starvation.`, 
    `The drought caused widespread crop failure and led to a severe situation of starvation in the region.`, 
    `The book depicted the harsh reality of starvation during times of war.`,
    `The organization aims to combat global hunger and alleviate starvation in vulnerable populations.`,
    `__`,
     ],
  },
  {
    word: 'statistics',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The humanitarian organization provided food aid to communities suffering from starvation.`, 
    `The drought caused widespread crop failure and led to a severe situation of starvation in the region.`, 
    `The book depicted the harsh reality of starvation during times of war.`,
    `The organization aims to combat global hunger and alleviate starvation in vulnerable populations.`,
    `__`,
     ],
  },
  {
    word: 'stockbroker',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He worked as a stockbroker, buying and selling securities on behalf of clients.`, 
    `The stockbroker advised his clients on investment strategies and portfolio management.`, 
    `She consulted with a stockbroker to make informed decisions about her stock investments.`,
    `The stockbroker closely monitored the market fluctuations and provided timely advice to clients.`,
    `__`,
     ],
  },
  {
    word: 'stockholder',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `As a stockholder of the company, she received regular dividends from her investment.`, 
    `The stockholder attended the annual shareholders' meeting to vote on important matters.`, 
    `The company distributed the annual report to all stockholders.`,
    `The rights and privileges of a stockholder are outlined in the company's bylaws.`,
    `__`,
     ],
  },
  {
    word: 'storm',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The storm unleashed powerful winds and heavy rainfall, causing widespread damage.`, 
    `They took shelter in their basement during the storm, waiting for it to pass.`, 
    `The storm disrupted electricity supply, leaving many homes without power.`,
    `The meteorologist issued a storm warning, urging people to take precautions.`,
    `__`,
     ],
  },
  {
    word: 'streamline',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company implemented new processes to streamline its operations and increase efficiency.`, 
    `The streamlined design of the car reduced air resistance, improving fuel efficiency.`, 
    `They used technology to streamline the payment process, making it faster and more convenient.`,
    `The manager proposed a plan to streamline the decision-making process and reduce bureaucracy.`,
    `__`,
     ],
  },
  {
    word: 'strike',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The workers decided to go on strike to demand better working conditions and higher wages.`, 
    `The baseball player swung and hit the ball with a powerful strike.`, 
    `The lightning strike caused a temporary power outage in the neighborhood.`,
    `The orchestra performed a strike of the drums, creating a dramatic effect in the music.`,
    `__`,
     ],
  },
  {
    word: 'struggling',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She was struggling with her studies and sought help from a tutor.`, 
    `The small business was struggling to compete with larger corporations.`, 
    `He shared his personal story of overcoming addiction and the struggles he faced.`,
    `The struggling economy led to an increase in unemployment rates.`,
    `__`,
     ],
  },
  {
    word: 'subsequent',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The initial meeting was followed by subsequent discussions to finalize the agreement.`, 
    `She published several research papers on the subject in subsequent years.`, 
    `The company released subsequent versions of the software, addressing user feedback and improving functionality.`,
    `The accident and subsequent investigation caused a delay in the project timeline.`,
    `__`,
     ],
  },
  {
    word: 'substantial',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They made a substantial investment in real estate, expecting high returns in the future.`, 
    `The company reported a substantial increase in sales revenue compared to the previous year.`, 
    `The evidence presented against the defendant was substantial, leading to a conviction.`,
    `They faced substantial challenges but remained determined to achieve their goals.`,
    `__`,
     ],
  },
  {
    word: 'substitutes',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Due to a shortage of eggs, they used applesauce as a substitute in the cake recipe.`, 
    `The coach made several substitutions in the second half to bring fresh energy to the team.`, 
    `She switched to using plant-based milk as a substitute for dairy milk.`,
    `The store offers a wide range of gluten-free substitutes for customers with dietary restrictions.`,
    `__`,
     ],
  },
  {
    word: 'substitution',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The injured player was forced to leave the game, and a substitution was made.`, 
    `They made a substitution in the recipe, replacing butter with coconut oil.`, 
    `The substitution of traditional classroom learning with online education has become more common.`,
    `The company hired a new employee as a substitution for the departing team member.`,
    `__`,
     ],
  },
  {
    word: 'succession',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The king's eldest son was next in line for succession to the throne.`, 
    `The company underwent a smooth transition of leadership through a succession plan.`, 
    `The player won the championship for the third time in succession.`,
    `The company experienced a series of successful product launches in quick succession.`,
    `__`,
     ],
  },
  {
    word: 'sufficient',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They gathered sufficient evidence to prove the defendant's guilt.`, 
    `She studied for hours to ensure she had a sufficient understanding of the subject matter.`, 
    `The project was completed within the given timeframe with sufficient resources.`,
    `The amount of food prepared was more than sufficient to feed all the guests.`,
    `__`,
     ],
  },
  {
    word: 'superior',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The athlete's performance was superior to that of the other competitors, earning them the gold medal.`, 
    `The superior quality of the fabric made the dress more durable and long-lasting.`, 
    `The company's products are known for their superior craftsmanship and attention to detail.`,
    `Her problem-solving skills were recognized as superior among her peers.`,
    `__`,
     ],
  },
  {
    word: 'surge',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The hospital experienced a surge in patients during flu season.`, 
    `The stock market saw a sudden surge in prices, leading to record gains for investors.`, 
    `They felt a surge of adrenaline as they prepared for their first skydiving jump.`,
    `The demand for the new product surged, leading to a temporary shortage in supply.`,
    `__`,
     ],
  },
  {
    word: 'surgery',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `__`, 
    `She underwent surgery to remove the tumor and improve her health.`, 
    `The surgeon performed a delicate surgery to repair a damaged artery.`,
    `The patient required emergency surgery to treat a life-threatening condition.`,
    `The cosmetic surgery enhanced her confidence and self-esteem.`,
     ],
  },
  {
    word: 'surpass',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The athlete's performance in the race surpassed all expectations, setting a new world record.`, 
    `The company's revenue for the quarter surpassed the projected targets.`, 
    `Her dedication and hard work allowed her to surpass her competitors in the industry.`,
    `The novel's popularity quickly surpassed that of any other book in recent years.`,
    `__`,
     ],
  },
  {
    word: 'surplus',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The farm had a surplus of fresh vegetables, which they donated to a local food bank.`, 
    `The government announced a budget surplus, indicating a strong economy.`, 
    `They bought discounted products during the surplus sale at the store.`,
    `The surplus of available seats allowed them to upgrade their flight to first class.`,
    `__`,
     ],
  },
  {
    word: 'sustainable',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company implemented sustainable practices to reduce its environmental impact.`, 
    `They built their house using sustainable materials, such as recycled wood and energy-efficient insulation.`, 
    `The farmer adopted sustainable farming methods to preserve the soil and minimize pesticide use.`,
    `The government launched a campaign to promote sustainable living and renewable energy sources.`,
    `__`,
     ],
  },
  {
    word: 'symmetry',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The artwork showcased perfect symmetry in its composition and design.`, 
    `The architecture of the building displayed a sense of symmetry and balance.`, 
    `The butterfly's wings exhibited beautiful symmetry with vibrant patterns.`,
    `The mathematician studied the symmetry of geometric shapes and their properties.`,
    `__`,
     ],
  },
  {
    word: 'sympathetic',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She showed a sympathetic ear to her friend's problems, offering support and understanding.`, 
    `The doctor was sympathetic to the patient's concerns and took the time to address them.`, 
    `The counselor provided a safe and sympathetic space for individuals to share their experiences.`,
    `The novel's protagonist was a sympathetic character, eliciting empathy from readers.`,
    `__`,
     ],
  },
  {
    word: 'take something into account',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `When planning the budget, they took into account the fluctuating costs of materials.`, 
    `The teacher considered the students' different learning styles when designing the lesson plans.`, 
    `The judge took the defendant's difficult childhood into account when sentencing.`,
    `The company took customer feedback into account to improve their product.`,
    `__`,
     ],
  },
  {
    word: 'tear',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She accidentally tore her dress while rushing through the door.`, 
    `The emotional speech brought tears to the audience's eyes.`, 
    `The fierce wind threatened to tear the roof off the house.`,
    `He couldn't hold back his tears when he received the heartfelt gift.`,
    `__`,
     ],
  },
  {
    word: 'temper',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He struggled to control his temper when faced with frustrating situations.`, 
    `She tempered her criticism with constructive feedback to help her colleagues improve.`, 
    `The blacksmith used water to temper the heated metal, giving it strength and durability.`,
    `The coach's strict training regimen tempered the team's skills and discipline.`,
    `__`,
     ],
  },
  {
    word: 'tend',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She has a tendency to procrastinate when faced with challenging tasks.`, 
    `The flowers in the garden tend to bloom earlier in the spring.`,
    `The child tends to get cranky when it's close to naptime.`,
    `The company's profits tend to fluctuate depending on the economic climate.`,
     ],
  },
  {
    word: 'termination',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The termination of the employee's contract was due to repeated violations of company policies.`, 
    `The termination of the project was a difficult decision, but it was deemed necessary.`, 
    `The termination clause in the agreement allows either party to end the partnership with proper notice.`,
    `The termination of the lease agreement required the tenant to vacate the premises.`,
    `__`,
     ],
  },
  {
    word: 'the merits',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The judge carefully considered the merits of the case before making a decision.`, 
    `The merits of the proposal were discussed during the board meeting.`, 
    `The scholarship committee evaluates applicants based on their academic merits.`,
    `The promotion was awarded to the employee who demonstrated exceptional merits and achievements.`,
    `__`,
     ],
  },
  {
    word: 'the seashore',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They enjoyed long walks along the seashore, feeling the sand between their toes.`, 
    `The seashore is a popular destination for families during the summer vacation.`, 
    `The sound of crashing waves on the seashore provided a calming ambiance.`,
    `They spent the afternoon collecting seashells on the seashore.`,
    `__`,
     ],
  },
  {
    word: 'the_charity',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The charity provides support and assistance to underprivileged children.`, 
    `Donations to the charity help fund medical research and treatment.`, 
    `The charity organized a fundraising event to raise awareness about homelessness.`,
    `The community came together to volunteer at the local charity during the holiday season.`,
    `__`,
     ],
  },
  {
    word: 'the_summit',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The leaders from different countries gathered at the summit to discuss global issues.`, 
    `Scaling the mountain, they finally reached the summit and enjoyed breathtaking views.`, 
    `The summit meeting resulted in a historic agreement between the two nations.`,
    `The participants engaged in lively discussions during the business summit.`,
    `__`,
     ],
  },
  {
    word: 'the_trail_markers',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The hikers followed the trail markers to stay on the designated path.`, 
    `The trail markers provided important information about the terrain and distance.`, 
    `The faded trail markers made it difficult to navigate through the dense forest.`,
    `The trail markers guided them safely back to the starting point.`,
    `__`,
     ],
  },
  {
    word: 'theoretical',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The professor presented a theoretical framework to explain the phenomenon.`, 
    `The course focused on the theoretical aspects of physics rather than practical applications.`, 
    `The theoretical model was tested through various experiments and simulations.`,
    `The students engaged in a theoretical debate about the ethical implications of artificial intelligence.`,
    `__`,
     ],
  },
  {
    word: 'thereby',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She submitted her report on time, thereby meeting the deadline.`, 
    `They implemented new policies, thereby improving efficiency in the workplace.`, 
    `The company reduced costs by implementing energy-saving measures, thereby increasing profitability.`,
    `The team won the championship, thereby securing their place in the national tournament.`,
    `__`,
     ],
  },
  {
    word: 'thirst',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `After a long hike, they quenched their thirst with refreshing cold water.`, 
    `The hot weather increased their thirst for a cold beverage.`, 
    `The runner's thirst for victory pushed them to train harder.`,
    `She had a thirst for knowledge and eagerly pursued educational opportunities.`,
    `__`,
     ],
  },
  {
    word: 'thoughtful',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He wrote a thoughtful letter expressing his gratitude for their support.`, 
    `She surprised her friend with a thoughtful birthday gift that perfectly suited their interests.`, 
    `The teacher provided thoughtful feedback to help the students improve their writing.`,
    `The thoughtful gesture of holding the door open made a positive impression on the stranger.`,
    `__`,
     ],
  },
  {
    word: 'threat',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The hurricane posed a significant threat to coastal areas, prompting evacuations.`, 
    `The company faced a financial threat due to increased competition in the market.`, 
    `The threat of a cyberattack led the organization to strengthen its security measures.`,
    `They reported the threatening behavior to the authorities to ensure their safety.`,
    `__`,
     ],
  },
  {
    word: 'timely',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The delivery of the package was timely, arriving exactly as scheduled.`, 
    `The timely intervention of the firefighter saved the house from further damage.`, 
    `The manager provided timely feedback to help the employee improve their performance.`,
    `The project was completed in a timely manner, meeting the deadline.`,
    `__`,
     ],
  },
  {
    word: 'to_staff',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company is looking to hire additional employees to staff the new department.`, 
    `They organized a job fair to attract qualified candidates to staff their expanding business.`, 
    `The manager created a staffing schedule to ensure adequate coverage during busy periods.`,
    `They worked together to efficiently staff the event, assigning roles and responsibilities.`,
    `__`,
     ],
  },
  {
    word: 'tone_pace',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The speaker adjusted their tone and pace to captivate the audience's attention.`, 
    `The tone and pace of the music set the mood for the dance performance.`, 
    `The instructor set a brisk tone pace during the workout class to challenge the participants.`,
    `The author's choice of tone and pace created a sense of urgency in the suspenseful novel.`,
    `__`,
     ],
  },
  {
    word: 'tough',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The marathon was a tough challenge, but she pushed through and crossed the finish line.`, 
    `The tough decision to downsize the company was made in order to ensure its long-term survival.`,
    `The coach praised the team for their tough defense during the game.`,
    `She has developed a tough exterior as a result of her difficult life experiences.`,
     ],
  },
  {
    word: 'toward',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They walked toward the beach, excited to feel the sand between their toes.`, 
    `The company is taking steps toward implementing sustainable business practices.`, 
    `Her attitude shifted toward optimism as she began to see positive changes in her life.`,
    `The train is traveling toward the city center, where most of the attractions are located.`,
    `__`,
     ],
  },
  {
    word: 'trail',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They embarked on a hiking adventure, following the trail through the dense forest.`, 
    `The trail led them to a picturesque waterfall nestled in the mountains.`, 
    `The hiker left breadcrumbs along the trail to mark their path back.`,
    `The trail offered stunning views of the surrounding landscape.`,
    `__`,
     ],
  },
  {
    word: 'tripped',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He tripped on the uneven pavement and stumbled forward.`, 
    `The child tripped over their own shoelaces and fell to the ground.`, 
    `She felt embarrassed when she tripped in front of her classmates.`,
    `They carefully watched their step, fearing they might trip on the rocky terrain.`,
    `__`,
     ],
  },
  {
    word: 'tropical',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They enjoyed a relaxing vacation on a tropical island, basking in the warm sunshine.`, 
    `The tropical rainforest is teeming with diverse wildlife and lush vegetation.`, 
    `The resort offers luxurious accommodations in a tropical paradise.`,
    `The tropical storm brought heavy rains and strong winds to the coastal region.`,
    `__`,
     ],
  },
  {
    word: 'tuition',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The university increased its tuition fees for the upcoming academic year.`, 
    `She received a scholarship that covered her tuition expenses.`, 
    `The parents started a college fund to save money for their child's tuition.`,
    `The tuition payment was due at the beginning of each semester.`,
    `__`,
     ],
  },
  {
    word: 'tumble',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The child took a tumble while playing on the playground but quickly got back up.`, 
    `The stock market experienced a tumble, causing investors to panic.`, 
    `She lost her balance and took a tumble down the stairs.`,
    `The gymnast executed a flawless routine, finishing with a dramatic tumble.`,
    `__`,
     ],
  },
  {
    word: 'underprivileged',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The organization provides support and resources to underprivileged children in low-income communities.`, 
    `She dedicated her time to volunteer at a local shelter for underprivileged families.`,
    `The government implemented policies to address the needs of the underprivileged population.`,
    `The charity fundraiser aimed to raise funds to improve the lives of underprivileged individuals.`,
     ],
  },
  {
    word: 'undersold',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The product was undersold, and its true value was not recognized by potential buyers.`, 
    `The marketing team implemented new strategies to ensure the product was not undersold in the market.`, 
    `The salesperson unintentionally undersold the benefits of the product, leading to lower sales.`,
    `Despite its quality, the artwork remained undersold, as it was not adequately promoted.`,
    `__`,
     ],
  },
  {
    word: 'underway',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The construction project is currently underway and is expected to be completed within a year.`, 
    `The investigation into the crime is underway, with detectives gathering evidence.`, 
    `The preparations for the event are underway, with organizers working diligently to ensure its success.`,
    `The company's restructuring plan is underway to streamline operations and improve efficiency.`,
    `__`,
     ],
  },
  {
    word: 'underwriter',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The insurance underwriter assessed the risk and determined the appropriate coverage for the policyholder.`, 
    `The investment bank acted as the underwriter for the company's initial public offering (IPO).`, 
    `The underwriter evaluated the financial statements and creditworthiness of the borrower before approving the loan.`,
    `The underwriter carefully reviewed the terms and conditions of the contract before providing their approval.`,
    `__`,
     ],
  },
  {
    word: 'unforeseen',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They encountered unforeseen obstacles during their journey, requiring them to change their plans.`, 
    `The project faced delays due to unforeseen circumstances beyond their control.`, 
    `The sudden snowstorm was an unforeseen event that disrupted travel plans.`,
    `The financial crisis had unforeseen consequences that affected the global economy.`,
    `__`,
     ],
  },
  {
    word: 'union',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The workers formed a union to advocate for better working conditions and fair treatment.`, 
    `The company negotiated with the union to reach a collective bargaining agreement.`, 
    `The union members went on strike to protest against proposed pay cuts.`,
    `The union held a meeting to discuss upcoming initiatives and address member concerns.`,
    `__`,
     ],
  },
  {
    word: 'unobtrusive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The surveillance cameras were designed to be unobtrusive, blending seamlessly into the environment.`, 
    `The host's role was to be unobtrusive, ensuring the guests' comfort and enjoyment.`,
    `The artwork was displayed in an unobtrusive manner, allowing the focus to remain on the pieces themselves.`,
    `The guide provided unobtrusive assistance, allowing visitors to explore the museum at their own pace.`,
     ],
  },
  {
    word: 'unobtrusiveness',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `__`, 
    `The unobtrusiveness of the new surveillance cameras ensured that they blended seamlessly into the environment without drawing attention.`, 
    `The unobtrusiveness of his presence allowed him to observe the interactions without disrupting the natural flow of the conversation.`,
    `The unobtrusiveness of the hotel staff made guests feel at ease, as their needs were attended to without being intrusive.`,
    `The unobtrusiveness of the design elements in the room created a calm and peaceful atmosphere, perfect for relaxation.`,
     ],
  },
  {
    word: 'untidy',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Her room was in a constant state of untidiness, with clothes and belongings scattered everywhere.`, 
    `The messy and untidy workspace made it difficult for her to find important documents.`,
    `The children's playroom was a chaotic mess, with toys and games strewn across the floor in untidy piles.`,
    `He couldn't focus on his work in an untidy environment, so he spent time organizing and cleaning his desk.`,
     ],
  },
  {
    word: 'until_further_notice',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The event has been postponed until further notice due to unforeseen circumstances.`, 
    `The office will remain closed until further notice as the staff undergoes training.`, 
    `The school has suspended extracurricular activities until further notice to prioritize academic performance.`,
    `The construction project is on hold until further notice pending approval from the local authorities.`,
    `__`,
     ],
  },
  {
    word: 'unusual',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `It was unusual to see snow in that region during the summer months.`, 
    `She wore an unusual outfit that turned heads wherever she went.`, 
    `The strange behavior of the wildlife was an unusual occurrence, possibly indicating environmental changes.`,
    `The team made an unusual decision to change their strategy, surprising their opponents.`,
    `__`,
     ],
  },
  {
    word: 'unversed',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She felt unversed in the subject matter and struggled to contribute to the discussion.`, 
    `The new employee was unversed in the company's processes and required additional training.`, 
    `He felt unversed in the local customs and etiquette, often unintentionally causing misunderstandings.`,
    `The professor provided guidance and resources to help the unversed students catch up with the rest of the class.`,
    `__`,
     ],
  },
  {
    word: 'uproar',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The controversial decision by the government caused an uproar among the citizens, leading to protests.`, 
    `The comedian's jokes caused uproar in the audience, with some finding them offensive.`, 
    `The news of the company's bankruptcy created an uproar in the financial markets.`,
    `The announcement of the winner of the competition caused an uproar of excitement and celebration.`,
    `__`,
     ],
  },
  {
    word: 'upstart',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The upstart company quickly gained market share, challenging the established players in the industry.`, 
    `The ambitious young entrepreneur was seen as an upstart by the more experienced business owners.`, 
    `The upstart musician released a hit song that catapulted them into stardom.`,
    `The upstart candidate ran a successful campaign against the long-standing incumbent in the elections.`,
    `__`,
     ],
  },
  {
    word: 'vacate',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They were required to vacate the premises by the end of the month due to the lease expiration.`, 
    `The hotel room was cleaned and prepared for the next guest after the previous occupants vacated.`, 
    `The court ordered the tenant to vacate the property due to non-payment of rent.`,
    `The students were asked to vacate the classroom so it could be prepared for the next lesson.`,
    `__`,
     ],
  },
  {
    word: 'various',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The store offers various options to cater to different customer preferences.`, 
    `The project required input from various team members with diverse expertise.`, 
    `She explored various career paths before deciding on her true passion.`,
    `The garden showcased various flowers and plants from around the world.`,
    `__`,
     ],
  },
  {
    word: 'versatile',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The versatile actor seamlessly transitioned between comedic and dramatic roles.`, 
    `The versatile tool can be used for a wide range of applications.`, 
    `She is a versatile athlete, excelling in multiple sports.`,
    `The versatile recipe can be adapted to accommodate different dietary restrictions.`,
    `__`,
     ],
  },
  {
    word: 'versed',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The lawyer was well versed in corporate law and provided valuable advice to her clients.`, 
    `He was well versed in the history of the region, sharing fascinating stories with his audience.`, 
    `The teacher was well versed in the subject matter and delivered engaging lectures.`,
    `She was well versed in the local customs and traditions, making it easier for her to adapt to the new environment.`,
    `__`,
     ],
  },
  {
    word: 'vigilant',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The security guard remained vigilant throughout the night, monitoring the premises for any signs of intrusion.`, 
    `It is important to stay vigilant and report any suspicious activities to the authorities.`, 
    `The organization implemented strict cybersecurity measures to ensure vigilant protection of sensitive data.`,
    `The mother kept a vigilant eye on her children as they played in the park.`,
    `__`,
     ],
  },
  {
    word: 'virtually',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The online conference allowed participants to virtually connect from different parts of the world.`, 
    `The virtual reality headset provided an immersive experience, making users feel like they were virtually present in a different environment.`, 
    `The company's services were virtually unavailable during the maintenance period.`,
    `He virtually completed the project, with only a few minor details remaining to be addressed.`,
    `__`,
     ],
  },
  {
    word: 'vital',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `Sleep is vital for overall health and well-being.`, 
    `The evidence presented was vital in proving the defendant's innocence.`, 
    `The team's captain played a vital role in leading the group to victory.`,
    `It is vital to follow safety protocols to prevent accidents and injuries.`,
    `__`,
     ],
  },
  {
    word: 'waive',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `__`, 
    `The company decided to waive the late payment fee as a gesture of goodwill.`, 
    `The athlete chose to waive his right to compete in the upcoming tournament due to an injury.`,
    `The landlord agreed to waive a portion of the rent for the tenant who was facing financial difficulties.`,
    `The government announced plans to waive the visa requirements for certain tourist destinations to promote travel.`,
     ],
  },
  {
    word: 'wander',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They decided to take a leisurely stroll and wander through the picturesque streets of the old town.`, 
    `The lost hiker continued to wander through the dense forest, hoping to find a familiar landmark.`, 
    `His mind would often wander during meetings, and he struggled to stay focused on the discussion.`,
    `The children were allowed to wander freely in the park, exploring the playground and chasing butterflies.`,
    `__`,
     ],
  },
  {
    word: 'weed',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The gardener spent the afternoon pulling out the weeds that had grown among the flowers.`, 
    `It's important to regularly weed the vegetable garden to prevent unwanted plants from competing for nutrients.`, 
    `The homeowner used a specialized tool to weed the cracks in the pavement, removing any unwanted plants.`,
    `The invasive weed species had taken over the riverbank, requiring extensive efforts to remove and restore the natural habitat.`,
    `__`,
     ],
  },
  {
    word: 'weird',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `There was a weird noise coming from the attic, causing them to feel uneasy.`, 
    `The strange and weird creature in the science fiction movie fascinated and frightened the audience.`, 
    `His taste in fashion was considered weird by some, but he embraced his unique style.`,
    `The weird coincidence of running into each other in a foreign country left them amazed and puzzled.`,
    `__`,
     ],
  },
  {
    word: 'well educated',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `She pursued higher education and became well educated in her field of study.`, 
    `The university prides itself on producing well-educated graduates who are prepared for the workforce.`, 
    `His extensive reading and research made him well educated on a wide range of topics.`,
    `Access to quality education is crucial in developing a well-educated and informed society.`,
    `__`,
     ],
  },
  {
    word: 'well versed',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `As a seasoned traveler, she was well versed in navigating unfamiliar cities and countries.`, 
    `The professor was well versed in the theories and principles of quantum physics.`, 
    `He was well versed in the history and culture of the ancient civilization, making him an excellent tour guide.`,
    `The lawyer's years of experience made him well versed in the intricacies of the legal system.`,
    `__`,
     ],
  },
  {
    word: 'what_a_burden',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The car broke down on the side of the road, and he sighed, thinking, "What a burden this is."`,
    `Having to carry the heavy suitcase up the stairs, she muttered to herself, "What a burden this is!"`,
    `The endless paperwork and bureaucracy associated with starting a business made him think, "What a burden it is to be an entrepreneur."`,
     ],
  },
  {
    word: 'while',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `He relaxed by reading a book while lying in a hammock under the shade of a tree.`, 
    `While she enjoyed baking, her sister preferred cooking savory dishes.`, 
    `The children played games and laughed while waiting for their parents to pick them up.`,
    `While some people find solitude in silence, others prefer listening to music.`,
    `__`,
     ],
  },
  {
    word: 'wires',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The electrician carefully connected the wires to ensure a safe and functional electrical system.`, 
    `The room was filled with a tangled mess of wires from various electronic devices.`,
    `The telecommunications company laid new fiber optic wires to improve internet connectivity in the area.`,
    `He accidentally tripped over the wires, causing the lamp to fall and shatter on the floor.`,
     ],
  },
  {
    word: 'wordy',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The professor's lecture was filled with complex and wordy explanations that confused the students.`, 
    `The contract was written in a wordy manner, making it difficult to understand the terms and conditions.`, 
    `She revised her essay to make it more concise and eliminate unnecessary wordy sentences.`,
    `The speaker's presentation was engaging and concise, avoiding unnecessary wordy descriptions.`,
    `__`,
     ],
  },
  {
    word: 'work_out',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `They planned to work out at the gym every morning to improve their fitness and overall health.`, 
    `The negotiation process was challenging, but they were able to work out a mutually beneficial agreement.`, 
    `She found it helpful to work out her problems by talking to a trusted friend or family member.`,
    `He decided to work out the math problem step by step to arrive at the correct answer.`,
    `__`,
     ],
  },
  {
    word: 'workforce',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The company hired additional employees to meet the growing demand and expand its workforce.`, 
    `The organization recognized the importance of diversity and inclusivity in building a strong workforce.`, 
    `The training program aimed to equip participants with the skills needed to enter the workforce successfully.`,
    `Automation and technology advancements have led to changes in the composition and dynamics of the workforce.`,
    `__`,
     ],
  },
  {
    word: 'worsen',
    description: [
    `__`, 
    `__`
    ],
     sentences: [
    `The heavy rain caused the flood situation to worsen, displacing several families from their homes.`, 
    `Despite the treatment, her condition continued to worsen, prompting the need for further medical intervention.`, 
    `The economic downturn resulted in job losses and a worsened financial situation for many people.`,
    `They realized that their attempts to mediate the conflict only served to worsen the tensions between the parties.`,
    `__`,
     ],
  },
];
