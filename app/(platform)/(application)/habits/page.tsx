'use client'
import { CardHabit } from "./_components/card-habit";

// Type pour les données des habitudes
type HabitType = 'nettoyage' | 'exercice' | 'lecture';

interface Habit {
    id: number;
    title: string;
    description: string;
    time: string;
    type: HabitType;
    urgency: number;
}

const habitsData: Habit[] = [
    {
        id: 1,
        title: "Sortir les Poubelles",
        description: "N'oubliez pas de sortir les poubelles à temps pour garder votre espace propre et bien organisé.",
        time: "18h00",
        type: "nettoyage",
        urgency: 1
    },
    {
        id: 2,
        title: "Faire du Sport",
        description: "Prenez soin de votre santé en faisant 30 minutes de sport.",
        time: "07h00",
        type: "exercice",
        urgency: 2
    },
    {
        id: 3,
        title: "Lire un Livre",
        description: "Prenez le temps de lire au moins 20 pages aujourd'hui.",
        time: "21h00",
        type: "lecture",
        urgency: 3
    }
];

export default function Example() {
    // Trier les habitudes par urgence
    const sortedHabits = habitsData.sort((a, b) => a.urgency - b.urgency);

    return (
        <div className="h-screen snap-y snap-mandatory overflow-y-auto">
            {sortedHabits.map((habit) => (
                <div key={habit.id} className="snap-start h-screen flex justify-center items-center">
                    <CardHabit 
                        title={habit.title} 
                        description={habit.description} 
                        time={habit.time} 
                        type={habit.type} 
                    />
                </div>
            ))}
        </div>
    );
}
