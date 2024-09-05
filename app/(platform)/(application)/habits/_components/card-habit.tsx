import React from 'react';
import { Button } from "@/components/ui/button";

interface CardHabitProps {
    title: string;
    description: string;
    time: string;
    type: 'nettoyage' | 'exercice' | 'lecture'; // Types d'habitude possibles
}

export const CardHabit: React.FC<CardHabitProps> = ({ title, description, time, type }) => {
    // Classes CSS conditionnelles pour les types d'habitudes
    const cardColor = type === 'nettoyage' ? 'bg-blue-100' :
                      type === 'exercice' ? 'bg-green-100' :
                      'bg-yellow-100';

    const animationColor = type === 'nettoyage' ? 'bg-blue-400' :
                           type === 'exercice' ? 'bg-green-400' :
                           'bg-yellow-400';

    return (
        <div className={`max-w-sm mx-auto ${cardColor} rounded-xl shadow-md overflow-hidden border border-gray-200`}>
            {/* Animated Element */}
            <div className="flex justify-center items-center p-4">
                <div className={`animate-bounce w-16 h-16 ${animationColor} rounded-full`}></div>
            </div>

            {/* Card Content */}
            <div className="px-6 py-4 text-center">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">
                    {description}
                </p>
                <p className="text-gray-800 font-medium">
                    Heure: {time}
                </p>
            </div>

            {/* Action Button */}
            <div className="px-6 py-4 flex justify-center">
                <Button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    Marquer comme fait
                </Button>
            </div>
        </div>
    );
};
