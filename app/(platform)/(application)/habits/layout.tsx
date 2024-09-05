const HabitsLayout = ({children}: {
    children: React.ReactNode;
}) =>{
    return (
        <div className="relative h-full bg-no-repeat bg-cover bg-center">
            <main className="relative  h-full">
            {children}
            </main>
        </div>

    );
};

export default HabitsLayout;