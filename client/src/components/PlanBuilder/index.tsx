import { SectionInput } from "./SectionInput";

export const PlanBuilder: React.FC = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            <div className="flex flex-col items-center justify-between h-full overlow-y-scroll w-full gap-4">
                <h1>Fill In Details</h1>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <SectionInput />)}
            </div>
        </div>
    );
}
