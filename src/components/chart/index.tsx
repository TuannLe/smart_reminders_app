import { View, Text } from 'react-native'
import React from 'react'
import Svg, { G, Circle } from 'react-native-svg'

export default function index({
    percentage = 75,
    radius = 40,
    strokeWidth = 10,
    duration = 500,
    color = 'tomato',
    daley = 0,
    textColor,
    max = 100
}) {
    const halfCircle = radius + strokeWidth;
    return (
        <View>
            <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2} `}>
                <G>
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill='transparent'
                        strokeOpacity={0.2}
                    />
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill='transparent'
                    />
                </G>
            </Svg>
        </View>
    )
}