const express=require('express')
const router=express.Router();
const data=require('../APi/mostaksedquestions/dbms')
const hr= [
  {
    "id": 1,
    "question": "Can you tell me a little about yourself?",
    img:'https://techstory.in/wp-content/uploads/2023/07/Panel-Interview-Questions.jpg',
    "answer": "Certainly! I have a [X]-year background in [industry/field]. In my previous role at [previous company], I was responsible for [brief description of responsibilities and achievements]. I am [mention a personal trait], and I am excited about the opportunity to bring my skills and experience to your team."
  },
  {
    "id": 2,
    "question": "Why are you interested in this position and our company?",
    "answer": "I am interested in this position because it aligns with my skills and interests, particularly in [mention a specific aspect of the role]. Your company has a strong reputation for [mention a positive aspect of the company, such as culture, innovation, or industry leadership], and I am eager to contribute to its continued success."
  },
  {
    "id": 3,
    "question": "What are your strengths and weaknesses?",
    img:'https://leverageedu.com/blog/wp-content/uploads/2021/06/Strengths-1-1024x724.png',
    "answer": "One of my strengths is [mention a specific strength relevant to the job, such as problem-solving, collaboration, or attention to detail]. As for weaknesses, I am continuously working on improving my [mention a skill or trait that you are actively addressing]. I believe in self-improvement and am open to feedback to enhance my professional development."
  },
  {
    "id": 4,
    "question": "How do you handle stress and pressure?",
    "answer": "I handle stress and pressure by [mentioning specific strategies, such as prioritizing tasks, maintaining open communication, or taking short breaks]. I find that staying organized and focusing on one task at a time helps me manage challenging situations effectively. Additionally, I believe in maintaining a healthy work-life balance to prevent burnout."
  },
  {
    "id": 5,
    "question": "Tell me about a challenging situation you faced at work and how you handled it.",
    "answer": "In my previous role, I encountered a challenge when [describe the situation briefly]. To address this, I [explain the steps you took, highlighting problem-solving skills, collaboration, or leadership]. The outcome was [mention a positive result or lesson learned]. It was a valuable experience that reinforced my ability to handle challenges effectively."
  },
  {
    "id": 6,
    "question": "How do you prioritize your work and manage time effectively?",
    img:'https://cdn.corporatefinanceinstitute.com/assets/time-management.jpg',
    "answer": "I prioritize my work by [mentioning your approach, such as using to-do lists, setting goals, or leveraging project management tools]. I also regularly assess deadlines and urgency to ensure that critical tasks are addressed first. Time management is crucial, and I strive to maintain a balance between efficiency and delivering high-quality results."
  },
  {
    "id": 7,
    "question": "What do you consider your greatest professional achievement?",
    "answer": "One of my greatest professional achievements was [describe the achievement, emphasizing your contributions and the positive impact]. This experience showcased my ability to [mention relevant skills] and demonstrated my commitment to achieving excellence. I am proud of this accomplishment and am eager to bring the same dedication to this role."
  },
  {
    "id": 8,
    "question": "How do you handle conflicts or disagreements with colleagues?",
    "answer": "I approach conflicts with an open mind and a focus on finding solutions. I believe in effective communication and active listening to understand different perspectives. If conflicts arise, I strive to address them professionally, seeking common ground and collaborating on solutions. I value teamwork and believe that diverse viewpoints contribute to stronger outcomes."
  },
  {
    "id": 9,
    "question": "Where do you see yourself in five years?",
    img:'https://www.interviewbit.com/blog/wp-content/uploads/2022/08/Where-Do-You-See-Yourself-in-5-Years-1024x803.png',
    "answer": "In five years, I see myself [mention a career goal or progression] within this company. I am committed to continuous learning and professional development to enhance my skills and contribute to the success of the team. I am excited about the prospect of taking on more responsibilities and making a meaningful impact."
  },
  {
    "id": 10,
    "question": "Do you have any questions for us?",
    "answer": "Yes, I do. I'm curious about [mention a specific aspect of the company, team, or role]. Can you provide more insights into [ask a thoughtful question that demonstrates your genuine interest]? Additionally, I would like to know more about [ask another relevant question]."
  }, {
    "id": 11,
    "question": "How do you stay updated with industry trends and developments?",
    "answer": "I stay updated with industry trends by regularly reading industry publications, attending relevant webinars and conferences, and participating in professional networking groups. Additionally, I actively seek opportunities for continuous learning, such as online courses or certifications, to stay informed about the latest advancements in the field."
  },
  {
    "id": 12,
    "question": "How would you handle a situation where you disagree with your supervisor's decision?",
    "answer": "In such a situation, I would first seek to understand the reasoning behind the decision. If I still have concerns, I would respectfully express my viewpoint, providing supporting evidence or alternative solutions. However, I understand the importance of teamwork and would ultimately support the final decision made by my supervisor, ensuring a positive and collaborative work environment."
  },
  {
    "id": 13,
    "question": "Can you describe a time when you successfully motivated a team or colleague?",
    "answer": "Certainly. In a previous role, I motivated a team by [describe the specific situation and your approach, highlighting leadership and motivational skills]. The outcome was [mention the positive results or achievements]. This experience reinforced my belief in the power of encouragement, collaboration, and recognizing individual contributions to drive collective success."
  },
  {
    "id": 14,
    "question": "How do you handle constructive criticism?",
    "answer": "I view constructive criticism as an opportunity for growth. I appreciate feedback that helps me improve and enhance my skills. When receiving constructive criticism, I actively listen, reflect on the feedback, and identify actionable steps to address any areas for improvement. I believe in a continuous improvement mindset and strive to apply feedback positively in my professional development."
  },
  {
    "id": 15,
    "question": "What strategies do you use to promote diversity and inclusion in the workplace?",
    "answer": "I promote diversity and inclusion by [describe specific strategies, such as advocating for diverse hiring practices, fostering an inclusive culture, or organizing diversity and inclusion initiatives]. I believe that a diverse and inclusive workplace enhances creativity, innovation, and employee satisfaction, contributing to a positive and collaborative work environment."
  },
  {
    "id": 16,
    "question": "How do you handle tight deadlines and multiple priorities?",
    "answer": "I handle tight deadlines and multiple priorities by prioritizing tasks based on urgency and importance. I use effective time management techniques, such as creating detailed project plans, breaking down tasks into manageable steps, and leveraging collaboration tools. Additionally, I maintain open communication with team members to ensure everyone is aligned and resources are allocated efficiently."
  },
  {
    "id": 17,
    "question": "Can you share a situation where you had to resolve a conflict within a team?",
    "answer": "Certainly. In a previous role, I encountered a conflict within the team regarding [describe the nature of the conflict]. I addressed the issue by [explain the steps taken, emphasizing effective communication, mediation, or conflict resolution skills]. The resolution resulted in improved team dynamics and collaboration. I believe in fostering a positive and supportive team environment."
  },
  {
    "id": 18,
    "question": "How do you ensure effective communication within a team?",
    "answer": "I ensure effective communication within a team by [describe your communication strategies, such as holding regular team meetings, fostering an open-door policy, or utilizing collaboration tools]. I encourage open dialogue, active listening, and the sharing of ideas. Clear and transparent communication is essential for successful collaboration and achieving team goals."
  },
  {
    "id": 19,
    "question": "What do you find most rewarding about working in a team?",
    "answer": "The most rewarding aspect of working in a team is the collective achievement of shared goals. I value the diverse perspectives and skills that each team member brings, leading to innovative solutions and successful outcomes. Teamwork fosters a sense of camaraderie and mutual support, making the work environment enjoyable and fulfilling."
  },
  {
    "id": 20,
    "question": "How do you handle a situation where a team member is not contributing effectively?",
    "answer": "If a team member is not contributing effectively, I would first seek to understand the reasons behind their challenges or concerns. I believe in providing support and guidance to help team members overcome obstacles. If the issue persists, I would address it through open communication, setting clear expectations, and exploring ways to leverage individual strengths for the benefit of the team."
  }
]

router.post('/postdata',async (req,res)=>{

hr.forEach((dataitems)=>{
    const {id,question,answer,img}=dataitems;
     fetch('https://quiz-app-d25cf-default-rtdb.firebaseio.com/mostaskedinterviewquestions/hr.json',
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id,question,answer,img
        })
    })
    

})
console.log('hello')
    res.send('data posted')
})
module.exports=router;