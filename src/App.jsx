import Question from "./Question";
import "./App.css"

function App() {
  const questions = [
    {
      id: 1,
      title: "Academic Team (Faculty)",
      content: `• In addition to the student themselves, the Faculty, the Teacher, or the Coach play a vital role
          in a student's success. IIT Academy takes pride in having an exceptional Faculty Team with a strong foundation in coaching, qualifications, expertise, and, most significantly, their dedication to the students.
          \n• Presently, IIT Academy's primary asset lies in its robust Faculty Team, consisting of faculty members specializing in Physics, Mathematics, and Chemistry for the JEE Divisions and in Physics, Chemistry Zoology, and Botany for the NEET Division.
          \n• The majority of Faculty Team leaders/members in the JEE Division have B.Tech./M.Tech. degrees from IITs, while those in the NEET Division are Graduates/Post Graduates from renowned medical colleges. They possess a deep understanding of the respective preparations for JEE and NEET.
          \n• The Faculty Team combines Experience, Energy, and Enthusiasm perfectly to sharpen the skills necessary for success in JEE/NEET.
          \n• Apart from regular teaching and problem-solving duties, the faculty members also provide motivational insights and tips to rejuvenate the students and maintain their focus on the ultimate goal.
          \n• IIT Academy has foreseen the future requirement for a proficient and skilled Faculty Team to meet the increasing number of aspiring students taking the JEE exam.`,
    },
    {
      id: 2,
      title: "Co-academic Arrangements",
      content: `• The caring and committed management and administration at IIT Academy ensure excellent 
      infrastructure and facilities, creating an ideal environment for effective learning.
      \n• The reshuffling of student batches, based on their performance in the Periodic test, once again fosters a sense of competition among the students.
      \n• Extra classes are scheduled and held as needed to ensure the timely completion of the syllabus and to stay in line with the course planning.
      \n• Back up Classes are planned and arranged for specific students of various courses according to their performance to improve the performance level of such students.
      \n• Awareness is created through counseling amongst students for Various Science & Mathematics Olympiads and other Competitions which are relevant and could be helpful in improving the confidence level of the students.`,
    },
    {
      id: 3,
      title: "Regular Classes",
      content: `• Total Lectures Per Week: 09 to 18 & Total Lectures Per Week Per Subject : 3 to 6.
      \n• Theoretical learning consist of Theory coupled with important concepts /fundamentals, formulae and is taught through solved/ unsolved examples/illustrations and derivations.
      \n• The Discussion part is more of interactive type and students are motivated to raise and discuss their doubts/objections to understand the concepts/fundamentals used in problem solving.
      \n• Exhaustive & detailed Class Notes are prepared by the students in the Classroom for all topics which almost eliminates the need of any other study material.
      \n• Appropriate Home Work is assigned in the form of Daily Practice Problems (DPPs), Problems from the Sheet and Problems from some standard/NCERT books. The assigned home work is discussed in the next class with interactive participation of the students.
      `,
    },
    {
      id: 4,
      title: "Daily Practice Problems (DPPs)",
      content: `• Daily Practice Problems are popularly known as DPPs. It is a set of Problems assigned 
      to the student as a part of the Home Work and is to be attempted at home.
      \n• The objective of DPP is to revise all the concepts which have been taught till date. Each DPP is assigned with Total Time/Marks (overall/question wise) for self-assessment.
      \n• A DPP consists of questions mostly based upon the syllabus studied/learned in the previous lectures. Few problems in each DPP are also included from the topics previously taught for the continuous revision of old topics.
      \n• The Discussion of problems of DPP is done in the next lecture. It boosts the morale of the student by doing sufficient practice of the theory taught in the classroom by practicing/solving the problems himself based upon that in the succeeding lectures.
      \n• DPP gradually helps in developing a habit and practice of revision of the syllabus. The problems of DPPs can be marked/highlighted at the time of attempting so that they can work as an additional Question Bank and help in better revision before the JEE.`,
    },
    {
      id: 5,
      title: "Sheet",
      content: `• A Sheet is typically a topic wise collection of problems in each subject i.e P,C, M & B. It is provided to the students as printed Study Material (topic wise).
      \n• The objective of the Sheet is to achieve perfection in a topic while it is being taught through 
      rigorous practice of variety of problems of various levels.
      \n• The entire syllabus of JEE / NEET is approximately divided into 25 to 30 Sheets in each subject.
      \n• A students learns/attempts around 20000/15000 problems through Sheets in a two/one year course/programme respectively. The Answers for all the problems are provided at the end of the Sheet for reference to the students.
      \n• The selection of Problems is very specific in nature, covering each and every aspect of the theory and fundamentals/concepts of the topic.`,
    },
    {
      id: 6,
      title: "Doubt Discussion Classes",
      content: `• The Objective of Doubt Discussion Classes is to provide additional attention and care to the students. It helps those students who couldn't understand a concept at first which is now affecting their performance.
      \n• It also helps those students who hesitate to ask/discuss their doubts in the classroom because of their shyness and their past academic environment.
      \n• Doubt Discussion Class encourages the students to clarify their doubts immediately without affecting the performance by ensuring firm hold on the concepts/fundamentals of the subject.
      \n• A student feels Personal Touch/Attention while attending the Doubt Discussion Classes. It motivates him to focus on his/her target with improved energy and enthusiasm.
      \n• Sometimes Doubt Discussion Classes become a good platform to recover the lost syllabus for those students who couldn't take admission at the time of beginning of the course and have got delayed due to some reason(s).
      \n• The Doubt Discussion Classes are also very helpful to those students who don't feel confident in a particular subject and it is affecting their overall performance. Through Doubt Discussion Classes such students can increase their grasp in that subject.`,
    },
    {
      id: 7,
      title: "Periodic Assessment Tests (PATs)",
      content: `• The objective of Periodic Assessment Tests is continuous assessment of the level of preparedness of student (own/comparative) and compelling him to study, practice and perform according to the requirements of JEE/NEET.
      \n• The pattern of Periodic Assessment Tests is as per JEE i.e. Two Papers of 3-Hours each carrying objective questions of all the three subjects viz. Physics, Mathematics and Chemistry in each paper.
      \n• However, sometimes Subjective Periodic Tests are also conducted to measure the fundamental based problem solving approach of the students. Since it develops an attitude to solve the problems in step-by-step manner it is very helpful for regular school going students in terms of daily learning and to practice for writing school/board examinations.
      \n• All the Periodic Assessment Tests are Live in nature and conducted under standard examination environment.
      \n• The quantity of Periodic Assessment Tests is sufficient to remove the examination fear amongst the students.
      \n• The Performance in Periodic Assessment Tests reflects student's chances of becoming successful in JEE NEET.`,
    },
    {
      id: 8,
      title: "Academic Research & Development (R&D)",
      content: `• IIT Academy has its own Study Material Research & Development (R & D) Division. Every faculty member is a part of R & D Division apart from a dedicated faculty team involved in various R & D activities.
      \n• The R & D Team continuously strives to reform and upgrade the Study Material to maintain equilibrium with the dynamism of JEE / NEET respectively.
      \n• The R & D Division is involved in research and enhancing the Study Material (DPPs, Sheets and MQB preparation of Periodic Test Papers, their validation and preparation of Answer Key, Hints & Solutions for the students as per need.
      \n• The R & D Team make every effort in compiling and framing the wide variety of problems according to the latest pattern of JEE / NEET for adequate and wholesome practice of the students.
      \n• The R & D Team ensures that the problems included in the Study Material and Test Papers are not repetitive in nature and give a feeling of freshness and innovativeness to the students.
      \n• The R & D Team also studies the changing needs of the students and develops the new academic products according to these changing needs.`,
    },
    {
      id: 9,
      title: "Academic Administration and Management",
      content: `• The Academic Calendar for the whole session is systematically planned for various courses at the beginning of the session itself.
      \n• The Academic Calendar includes Curriculum Planning, Designing & Development, Course Pedagogy, Syllabus Division, Test Schedule and Lecture Planning.
      \n• The Academic Management Team is supported by a Non-academic Management Team in running the Academic Management System effectively and efficiently.
      \n• A regular Syllabus Progress Monitoring Report is compiled and analyzed on weekly basis for all the courses to ensure syllabus execution as per academic planning.
      \n• Academic Discipline Guidelines & Code of Conduct is followed by all the Faculty Members related to syllabus execution, content delivery, start/end of classes, attitude & behaviour towards students.
      `,
    },
    {
      id: 10,
      title: "Academic Performance Analysis",
      content: `• IIT Academy understands that the Academic Performance of both the coach (faculty) and the trainee (student) is not only very important but also highly critical for the success in JEE /NEET.
      \n• Each periodic test is concluded with a summary report of the number of mistakes and wrong practices adopted by the students in attempting the problems; it helps in refining the preparation of students by highlighting their weak areas and accordingly measures are suggested to them.
      \n• Student Satisfaction Survey is conducted 3-4 times during the academic session to measure the academic performance of the faculty members individually and that of department (Physics, Chemistry, Mathematics for JEE Divisions and in Physics, Chemistry, Zoology and Botany for NEET Division as a whole) on various parameters. The results are analyzed and used giving inputs to enhance the output of both students & faculty members.
      \n• The analysis report of the above is used to design and develop Faculty Knowledge (subject and fundamentals), Skill (Communication Practices and Methodologies, Use of Modern Training Tools, techniques and Technologies) & Attitude (teaching aptitude and behaviour) Improvement Programmes.
      \n• The overall focus of the Academic Performance Analysis is on the improvement in the subject knowledge understanding of the fundamentals behind scientific concepts, application of the concepts in problem solving with speed & accuracy through rigorous practice and persistence.`,
    },
  ];

  return (
    <>
      <div className="container">
        <h1>Why IIT Academy?</h1>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
