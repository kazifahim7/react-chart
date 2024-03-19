import { ComposedChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid ,Area,Bar} from 'recharts';

const Chart = () => {
    const information = [
        { "student": "Alice", "mathMarks": 85, "markPercent": 85 },
        { "student": "Bob", "mathMarks": 78, "markPercent": 78 },
        { "student": "Charlie", "mathMarks": 92, "markPercent": 92 },
        { "student": "David", "mathMarks": 65, "markPercent": 65 },
        { "student": "Emily", "mathMarks": 70, "markPercent": 70 },
        { "student": "Frank", "mathMarks": 88, "markPercent": 88 },
        { "student": "Grace", "mathMarks": 95, "markPercent": 95 },
        { "student": "Henry", "mathMarks": 83, "markPercent": 83 },
        { "student": "Isabella", "mathMarks": 79, "markPercent": 79 },
        { "student": "Jack", "mathMarks": 72, "markPercent": 72 }
    ]

    return (
        <div>
            <ComposedChart width={730} height={250} data={information}>
                <XAxis dataKey="student" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="markPercent" fill="white" stroke="#8884d8" />
                <Bar dataKey="mathMarks" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="mathMarks" stroke="green" />
            </ComposedChart>
            
        </div>
    );
};

export default Chart;