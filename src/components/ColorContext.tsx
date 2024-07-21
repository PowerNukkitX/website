import React, {createContext, ReactNode, useContext, useEffect} from 'react';
import {animate, useMotionValue} from 'framer-motion';

const COLORS_TOP = ["#22c55e", "#16a34a", "#15803d", "#166534"];

interface ColorContextProps {
    color: string;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const colorMotionValue = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        const animation = animate(colorMotionValue, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });

        return () => animation.stop(); // Clean up animation on unmount
    }, [colorMotionValue]);

    return (
        <ColorContext.Provider value={{ color: colorMotionValue.get() }}>
            {children}
        </ColorContext.Provider>
    );
};

export const useColor = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
};
