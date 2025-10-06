import React from 'react';
import { Lightbulb, Palette, Smartphone, Rocket } from 'lucide-react';

export default function ProjectWorkflow() {
  const stages = [
    {
      number: 1,
      title: 'IDEA',
      icon: Lightbulb,
      description: 'Important element of any project and we gather all the necessary information related to it',
    },
    {
      number: 2,
      title: 'DESIGN',
      icon: Palette,
      description: 'We plan an overview of the project and study the potential audience for the project',
    },
    {
      number: 3,
      title: 'BUILD',
      icon: Smartphone,
      description: 'We create and analyze the user flows, design the interface and build the prototype',
    },
    {
      number: 4,
      title: 'BETA',
      icon: Rocket,
      description: 'Analyse all possible bugs and errors, and refine them based on the feedbacks',
    },
    {
      number: 5,
      title: 'GO LIVE',
      icon: Rocket,
      description: 'Launch the project when it is ready for use by targeted users',
    },
  ];

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Mobile Layout - Single Column */}
        <div className="md:hidden">
          <div className="space-y-12">
            {stages.map((stage) => (
              <div key={stage.number} className="flex flex-col items-center text-center">
                {/* Circle with icon */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full border-2 border-dotted border-gray-700 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-gray-900/50">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <stage.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Stage number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {stage.number}
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-xs">
                  <h3 className="text-lg font-bold mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medium Screen Layout - 2 Column Grid */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-2 items-center justify-center">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className={`flex flex-col items-center text-center ${
                  index % 4 === 1 || index % 4 === 2 ? '' : ''
                }`}
              >
                {/* Circle with icon */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 rounded-full border-2 border-dotted border-gray-700 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-gray-900/50">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <stage.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Stage number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {stage.number}
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-xs">
                  <h3 className="text-lg font-bold mb-3">
                    <span className="text-orange-600">{stage.number}.</span>{' '}
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Original Horizontal */}
        <div className="hidden lg:block">
          <div className="relative flex items-center justify-between">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 -z-10">
              <div className="relative w-full h-full">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{
                        left: `${(i * 100) / 4}%`,
                        width: `${50 / 4}%`,
                      }}
                    />
                    {i < 3 && (
                      <div
                        className="absolute w-3 h-3 bg-orange-600 rounded-full top-1/2 -translate-y-1/2"
                        style={{
                          left: `${((i + 1) * 100) / 4}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    )}
                    <div
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{
                        left: `${((i + 0.5) * 100) / 4}%`,
                        width: `${50 / 4}%`,
                      }}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Stage items */}
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="flex flex-col items-center w-48 xl:w-64 relative z-10"
                style={{
                  marginTop: index % 2 === 0 ? '0' : '200px',
                }}
              >
                {/* Title and description above circle for odd stages */}
                {index % 2 === 0 && (
                  <div className="text-center mb-6 max-w-xs">
                    <h3 className="text-lg xl:text-xl font-bold mb-2">
                      <span className="text-orange-600">{stage.number}.</span>{' '}
                      {stage.title}
                    </h3>
                    <p className="text-sm xl:text-base text-gray-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                )}

                {/* Circle with icon */}
                <div className="relative">
                  <div className="w-36 h-36 xl:w-44 xl:h-44 rounded-full border-2 border-dotted border-gray-700 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-gray-900/50">
                    <div className="w-28 h-28 xl:w-36 xl:h-36 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <stage.icon className="w-8 h-8 xl:w-12 xl:h-12 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Title and description below circle for even stages */}
                {index % 2 !== 0 && (
                  <div className="text-center mt-6 max-w-xs">
                    <h3 className="text-lg xl:text-xl font-bold mb-2">
                      <span className="text-orange-600">{stage.number}.</span>{' '}
                      {stage.title}
                    </h3>
                    <p className="text-sm xl:text-base text-gray-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}