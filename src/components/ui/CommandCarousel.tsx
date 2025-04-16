import {useEffect, useState} from 'react';

interface CommandBlock {
    cmd: string;
    output: string[];
}

const commands: CommandBlock[] = [
    {
        cmd: 'corev init --api http://localhost:3000',
        output: ['API base URL saved as: http://localhost:3000'],
    },
    {
        cmd: 'corev pull atlas',
        output: [
            '⫶⫶⫶ Fetching config for "atlas" http://localhost:3000',
            '→ Config saved for atlas version 1.0.0',
        ],
    },
];

export default function CommandCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedCommand, setTypedCommand] = useState('');
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        setTypedCommand('');
        setShowOutput(false);

        const currentCmd = commands[currentIndex].cmd;
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            if (charIndex < currentCmd.length) {
                setTypedCommand(currentCmd.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setShowOutput(true);
                }, 700);
            }
        }, 60);

        const cycleTimeout = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % commands.length);
        }, 6000);

        return () => {
            clearInterval(typeInterval);
            clearTimeout(cycleTimeout);
        };
    }, [currentIndex]);

    return (
        <div
            className="font-mono text-[14px] text-[#333333] leading-normal px-6 pb-8"
            style={{minHeight: '3em'}}
        >
            <p key={currentIndex}>
                {commands[currentIndex].cmd.startsWith("corev") ? (
                    <>
            <span className="mr-0.5">
              <span className="text-gray-400">$</span>
            </span>
                        <span className="text-[#50B37A]">
              {typedCommand.length < 5 ? typedCommand : "corev"}
            </span>
                        {typedCommand.length >= 5 && (
                            <span className="text-[#333333]">{typedCommand.slice(5)}</span>
                        )}
                    </>
                ) : (
                    <span className="text-[#333333]">{typedCommand}</span>
                )}
            </p>
            {showOutput &&
                commands[currentIndex].output.map((line, i) => {
                    if (line.startsWith('→')) {
                        const regex = /^(→)(\s*Config saved for\s*)(atlas)(\s*version\s*)([\d.]+)$/;
                        const match = regex.exec(line);
                        if (match) {
                            return (
                                <p key={i}>
                                    <span className="text-[#50B37A]">{match[1]}</span>
                                    <span className="text-[#333333]">{match[2]}</span>
                                    <span className="text-[#3C82F6]">{match[3]}</span>
                                    <span className="text-[#333333]">{match[4]}</span>
                                    <span className="text-[#50B37A]">{match[5]}</span>
                                </p>
                            );
                        }
                    }
                    if (line.includes('http')) {
                        return (
                            <p key={i}>
                <span>
                  {line.split('http')[0]}
                    <span
                        className="text-[#3C82F6]"
                    >
                    http{line.split('http')[1]}
                  </span>
                </span>
                            </p>
                        );
                    }
                    return (
                        <p key={i}>
                            <span>{line}</span>
                        </p>
                    );
                })}
        </div>
    );
}
