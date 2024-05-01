import React,{useRef,useEffect, useState} from "react";
import {View,Dimensions,Animated} from 'react-native';
import Svg,{G,Line,Circle,Text as SvgText,Path} from 'react-native-svg';
import {styles} from './styles';
import { Easing } from "react-native-reanimated";
const window_width = Dimensions.get('window').width;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedSvgText = Animated.createAnimatedComponent(SvgText);
const AnimatedPath = Animated.createAnimatedComponent(Path);

const LineChartx = ({
    line_chart_date=[],
    containerHeight =400,
    circleColor="#ccc",
    circleRadius=4,
    axisColor="#fff",
    axisWidth=2,
    axisLablefontSize = 10,
    lineChartColor = "#daa520",
    lineCharWidth = 2,
    }) => {
    const marginFor_x_fromLeft = 50;
    const marginFor_y_fromBottom = 50;
    const padding_from_screenBorder = 20;

    const x_axis_x1_point = marginFor_x_fromLeft;
    const x_axis_y1_point = containerHeight - marginFor_y_fromBottom;
    const x_axis_x2_point = window_width - padding_from_screenBorder;
    const x_axis_y2_point = containerHeight - marginFor_y_fromBottom;
    const x_axis_actual_width =
     window_width - marginFor_x_fromLeft - padding_from_screenBorder;
    const gap_between_x_axis_ticks =
     x_axis_actual_width/(line_chart_date.length - 1);

    const y_axis_x1_point = marginFor_x_fromLeft;
    const y_axis_y1_point = padding_from_screenBorder;
    const y_axis_x2_point = marginFor_x_fromLeft;
    const y_axis_y2_point = containerHeight - marginFor_y_fromBottom;
    


    const y_min_value = 0;
    const y_max_value = Math.max.apply(
        Math,
        line_chart_date.map((item) => item.value),
    );
    const gapBetweenYAxisValues = (y_max_value - y_min_value) / (line_chart_date.length -2);
    const y_axis_actual_height = y_axis_y2_point - y_axis_y1_point;
    const gap_between_y_axis_ticks = (y_axis_actual_height - y_min_value) / (line_chart_date.length-1);
    [yAxisLabels , setYAxisLabels] = useState([]);
    
    const animated_x_axis_width = useRef(
        new Animated.Value(x_axis_x1_point),
    ).current;
    const animated_y_axis_width = useRef(
        new Animated.Value(y_axis_y2_point),
    ).current;
    const animated_circle_radius = useRef(new Animated.Value(0)).current;
    const animated_ticks_labels_opacity = useRef(new Animated.Value(0)).current;
    const animated_path_ref = useRef(null);
    const animated_path_length = useRef(new Animated.Value(0)).current;
    const animated_path_opacity = useRef(new Animated.Value(0)).current;


    const [pathLength,setPathLength] = useState(0);
    

  

    useEffect(()=>{
        const yAxisDate = line_chart_date.map((item,index) =>{
            if (index === 0) {
             return y_min_value;
            }else{
             return y_min_value + gapBetweenYAxisValues * index;
            }
        });
        setYAxisLabels(yAxisDate);
        start_x_y_axis_animation();
        start_axis_circle_animation();
        start_x_y_ticks_labels_animation();
    },[]);
    useEffect(() => {
       
    },[])

    useEffect(() => {
        animated_path_length.setValue(pathLength);
        Animated.timing(animated_path_length,{
            toValue:0,
            duration: 1500,
            delay:500,
            useNativeDriver:true,
            easing:Easing.ease,
        }).start();
        Animated.timing(animated_path_opacity,{
            toValue:1,
            duration: 1500,
            delay:100,
            useNativeDriver:true,
            easing:Easing.ease,
        }).start(); 
        
    },[pathLength])

    const start_axis_circle_animation = () => {
        
        Animated.timing(animated_circle_radius,{
            toValue: circleRadius,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    };
    const start_x_y_ticks_labels_animation = () =>{
        Animated.timing(animated_ticks_labels_opacity,{
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    };
    const start_x_y_axis_animation = () => {
        
        Animated.timing(animated_x_axis_width,{
            toValue: x_axis_x2_point,
            duration: 1500,
            delay: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(animated_y_axis_width,{
            toValue: y_axis_y1_point,
            duration: 1500,
            delay: 500,
            useNativeDriver: true,
        }).start();
    };
    const render_x_y_axis = () => {
        return(
            <G key="x-axis y-axis">
                <AnimatedCircle
                    key="x-axis x1y1-circle"
                    cx={x_axis_x1_point}
                    cy={x_axis_y1_point}
                    fill = {circleColor}
                    r={animated_circle_radius}
                    />
                     <AnimatedCircle
                    key="x-axis x2y2-circle"
                    cx={x_axis_x2_point}
                    cy={x_axis_y2_point}
                    fill = {circleColor}
                    r={animated_circle_radius}
                    />
                      <AnimatedCircle
                    key="y-axis x1y1-circle"
                    cx={y_axis_x1_point}
                    cy={y_axis_y1_point}
                    fill = {circleColor}
                    r={animated_circle_radius}
                    />
                    <AnimatedLine
                        key = "x-axis"
                        x1={x_axis_x1_point} 
                        y1={x_axis_y1_point}
                        x2={animated_x_axis_width}
                        y2={x_axis_y2_point}
                        stroke={axisColor}
                        strokeWidth={axisWidth}
                    />
                     <AnimatedLine
                        key = "y-axis"
                        x1={y_axis_x1_point} 
                        y1={animated_y_axis_width}
                        x2={y_axis_x2_point}
                        y2={y_axis_y2_point}
                        stroke={axisColor}
                        strokeWidth={axisWidth}
                    />
                    
            </G>
        )
    };
    const render_x_axis_labels_and_ticks = () => {
        return line_chart_date.map((item,index) => {
            let x_point = x_axis_x1_point + gap_between_x_axis_ticks * index;
            return(
                <G key={`x-axis labels and ticks${index}`}>
                    <AnimatedLine 
                        key={`x-axis-tick${index}`}
                        x1={x_axis_x1_point + gap_between_x_axis_ticks * index}
                        y1={x_axis_y1_point}
                        x2={x_axis_x1_point + gap_between_x_axis_ticks * index}
                        y2={x_axis_y1_point + 10}
                        strokeWidth={axisWidth}
                        stroke={axisColor}
                    />
                    <AnimatedSvgText
                    x={x_point}
                    y={x_axis_y1_point + 20}
                    fill={axisColor}
                    fontWeight='400'
                    fontSize={axisLablefontSize}
                    textAnchor="middle"
                    >
                        {item?.month}
                    </AnimatedSvgText>
                    
                </G>
                
            );
        });

    };

    const render_y_axis_labels_and_ticks = () => {
        return yAxisLabels.map ((item,index) => {
            let y_point = y_axis_y2_point - gap_between_y_axis_ticks * index;
            return(
                <G
                key = {`y-axis labels and ticks${index}`}>
                <AnimatedLine 
                    key ={`y-axis tick${index}`}
                    x1={marginFor_x_fromLeft}
                    y1={y_point}
                    x2={marginFor_x_fromLeft - 10}
                    y2={y_point}
                    stroke={axisColor}
                    strokeWidth={axisWidth}
                    opacity={animated_ticks_labels_opacity}
                />
                <AnimatedSvgText
                key={`y-axis label${index}`}
                x={marginFor_x_fromLeft - 20}
                y={y_point}
                fill={axisColor}
                fontWeight='400'
                fontSize={axisLablefontSize}
                textAnchor = "end"
                opacity={animated_ticks_labels_opacity}
                >
                 {item}
                </AnimatedSvgText>
                </G>
            );

        });
    };
    const getDPath = () => {
        const maxValueAtYaxis = yAxisLabels[yAxisLabels.length - 1];
        if (maxValueAtYaxis){
            let dPath = '';
            line_chart_date.map((item, index) =>{
                let x_point =x_axis_x1_point + gap_between_x_axis_ticks * index;
                let y_point =(maxValueAtYaxis - item.value) * 
                (gap_between_y_axis_ticks / gapBetweenYAxisValues) +
                 padding_from_screenBorder;
                if(index === 0){
                    dPath += `M${x_point} ${y_point}`
                }else{
                    dPath += `L${x_point} ${y_point}`
                }
            })
            return dPath
        }
       
    }
    const render_lineChart_path = () => {
        const dPath = getDPath();
        return(
            <AnimatedPath 
            ref = {animated_path_ref}
            d= {dPath}
            strokeWidth = {lineCharWidth}
            stroke={lineChartColor}
            onLayout={()=> setPathLength(animated_path_ref?.current.getTotalLength())}
            strokeDasharray={pathLength}
            strokeDashoffset={animated_path_length}
            opacity={animated_path_opacity}
            />
        )
    }
    const render_lineChart_circles = () => {
        const maxValueAtYaxis = yAxisLabels[yAxisLabels.length -1];
        if (maxValueAtYaxis){
            let dPath = '';
            return line_chart_date.map((item, index) =>{
                let x_point =x_axis_x1_point + gap_between_x_axis_ticks * index;
                let y_point =(maxValueAtYaxis - item.value) * 
                (gap_between_y_axis_ticks / gapBetweenYAxisValues) +
                 padding_from_screenBorder;
                 return (
                    <G key={`line chart circles${index}`}>
                        <AnimatedCircle 
                        cx={x_point}
                        cy={y_point}
                        r={animated_circle_radius}
                        fill={circleColor}
                        />
                    </G>
                 );
            });
          
        };
    };
    return (
     <View style={[styles.svgWrapper,{height: containerHeight}]}>
        <AnimatedSvg height="100%" width="100%" style ={styles.svgStyle}>
            {render_x_y_axis()}
            {render_x_axis_labels_and_ticks()}
            {render_y_axis_labels_and_ticks()}
            {render_lineChart_path()}
            {render_lineChart_circles()}
        </AnimatedSvg>
    </View>
        
        );
};

export default LineChartx;