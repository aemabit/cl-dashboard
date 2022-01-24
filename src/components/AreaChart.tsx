import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
} from "recharts";

const data: any = [
    {
        month: "Nov",
        value: 25,
    },
    {
        month: "Dec",
        value: 5,
    },
    {
        month: "Jan",
        value: 20,
    },

    {
        month: "Feb",
        value: 15,
    },
    {
        month: "Mar",
        value: 10,
    },
    {
        month: "Apr",
        value: 30,
    },
    {
        month: "May",
        value: 50,
    },
    {
        month: "Jun",
        value: 40,
    },
];

export default function AreaChartComponent() {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="#2451B7"
                            stopOpacity={0.4}
                        />
                        <stop
                            offset="75%"
                            stopColor="#2451B7"
                            stopOpacity={0.05}
                        />
                    </linearGradient>
                </defs>

                <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    padding={{ left: 20, right: 5 }}
                />

                <YAxis
                    dataKey="value"
                    axisLine={false}
                    tickLine={false}
                    tickCount={6}
                    tickMargin={10}
                    tickFormatter={(number) => `${number}k`}
                />

                <Tooltip content={<CustomTooltip />} />

                <CartesianGrid opacity={0.1} vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    );
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="tooltip">
                {/* <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
                <p>${payload[0].value.toFixed(2)} CAD</p> */}
            </div>
        );
    }
    return null;
};
