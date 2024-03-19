import { LineChart as Lc, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const info = [
        { "student": "Alice", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 90 },
        { "student": "Bob", "mathMarks": 78, "physicsMarks": 72, "chemistryMarks": 85 },
        { "student": "Charlie", "mathMarks": 92, "physicsMarks": 85, "chemistryMarks": 88 },
        { "student": "David", "mathMarks": 65, "physicsMarks": 60, "chemistryMarks": 70 },
        { "student": "Emily", "mathMarks": 70, "physicsMarks": 68, "chemistryMarks": 75 },
        { "student": "Frank", "mathMarks": 88, "physicsMarks": 82, "chemistryMarks": 90 },
        { "student": "Grace", "mathMarks": 95, "physicsMarks": 90, "chemistryMarks": 98 },
        { "student": "Henry", "mathMarks": 83, "physicsMarks": 75, "chemistryMarks": 85 },
        { "student": "Isabella", "mathMarks": 79, "physicsMarks": 72, "chemistryMarks": 80 },
        { "student": "Jack", "mathMarks": 72, "physicsMarks": 65, "chemistryMarks": 75 }
    ]


    return (
        <div>
            <Lc width={800} height={400} data={info}>
                <XAxis dataKey="student" />
                <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke="red"></Line>
                <Line dataKey={'physicsMarks'} stroke="blue" ></Line>
                <Line dataKey={'chemistryMarks'} stroke="green" ></Line>

            </Lc>

        </div>
    );
};

export default LineChart;