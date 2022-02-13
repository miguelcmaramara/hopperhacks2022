import React from 'react';
import * as d3 from 'd3';
import { useD3 } from '../hooks/useD3';

BarChart() = function(data) {
    const ref = useD3(
        (svg) => {
            const height = 500;
            const width = 500;
            const margin = {top: 20, right: 20, bottom: 30, left: 40};

            const x = d3
                .scaleLinear()
                .domain([0, d3.])

            const y = d3
                .scaleBand()
                .domain(data.map((d) => d.sales))
        }
    )
    
    return (
        <svg
            style={{
                height: 500,
                width: "100%",
                marginRight: "0px",
                marginLeft: "0px"
            }}
        >
            <g className="plot-area"/>
            <g className="x-axis"/>
            <g className="y-axis"/>
        </svg>
    );
}
export default BarChart;