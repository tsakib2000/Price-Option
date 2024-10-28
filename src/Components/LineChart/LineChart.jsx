import { LineChart as Lchart, BarChart, Line, XAxis, YAxis , Bar } from "recharts";


const LineChart = () => {
  const mathMarksData = [
    { id: "student_001", name: "Alice", math: 75, physics: 80, chemistry: 78 },
    { id: "student_002", name: "Bob", math: 82, physics: 75, chemistry: 85 },
    {
      id: "student_003",
      name: "Charlie",
      math: 68,
      physics: 70,
      chemistry: 72,
    },
    { id: "student_004", name: "David", math: 90, physics: 88, chemistry: 92 },
    { id: "student_005", name: "Ella", math: 85, physics: 82, chemistry: 84 },
    { id: "student_006", name: "Fiona", math: 78, physics: 79, chemistry: 80 },
    { id: "student_007", name: "George", math: 88, physics: 86, chemistry: 89 },
    { id: "student_008", name: "Hannah", math: 92, physics: 91, chemistry: 90 },
    { id: "student_009", name: "Ian", math: 80, physics: 78, chemistry: 82 },
    { id: "student_010", name: "Julia", math: 94, physics: 95, chemistry: 93 },
  ];
  return (
    <>
      <div>
        <Lchart width={500} height={400} data={mathMarksData}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Line dataKey="math" stroke="red"></Line>
          <Line dataKey="physics" stroke="green"></Line>
        </Lchart>
      </div>
      
   
      <div>
      <BarChart width={730} height={250} data={mathMarksData}>
      <XAxis dataKey='name'></XAxis>
      <YAxis></YAxis>
      <Bar dataKey="chemistry" fill="#BEF264"></Bar>
      <Bar  dataKey="physics" fill="#b03f3f"></Bar>
      </BarChart>
      </div>
    </>
  );
};

export default LineChart;
