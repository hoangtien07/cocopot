import React from 'react';
import { Soup, Drumstick, Flame } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: <Soup size={40} />,
        title: "Uống canh trước",
        desc: "Drink soup first",
        color: "text-brand-orange"
    },
    {
        id: 2,
        icon: <Drumstick size={40} />,
        title: "Thịt gà sau",
        desc: "Second, eat chicken",
        color: "text-brand-green"
    },
    {
        id: 3,
        icon: <Flame size={40} />,
        title: "Nhúng lẩu cuối",
        desc: "Finally, have fondues",
        color: "text-brand-orange"
    }
];

export const InstructionSection: React.FC = () => {
    return (
        <section className="py-16 bg-brand-cream">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-2">Gợi Ý Cách Thưởng Thức</h2>
                <p className="text-brand-dark/60 italic mb-12">Recommended eating method</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {steps.map((step, idx) => (
                        <div key={step.id} className="flex flex-col items-center">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center z-10 relative text-brand-green">
                                    {step.icon}
                                </div>
                                {/* Connecting Line */}
                                {idx !== steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-brand-sage/30 -translate-y-1/2 -ml-2" />
                                )}
                            </div>
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className={`text-5xl font-serif font-bold ${step.color} opacity-20`}>{step.id}</span>
                                <h3 className="text-xl font-bold text-brand-dark uppercase tracking-wide">{step.title}</h3>
                            </div>
                            <p className="text-neutral-500 text-sm font-serif italic">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};