import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export type PieChartPropsType = {
    data: PieChartDataProps[]
    style?: React.CSSProperties
}

export type PieChartDataProps = {
    name: string;
    value: number;
    color: string;
}


const PieChartComponent: React.FC<PieChartPropsType> = ({data, style = {}}) => {
    return (
        <PieChart width={250} height={400} style={style}>
            <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={100}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="none"
                    />
                ))}
            </Pie>
        </PieChart>
    );
};

export default PieChartComponent;
