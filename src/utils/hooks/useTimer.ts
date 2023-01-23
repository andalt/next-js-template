import { useState, useEffect } from 'react';

export enum TimerStatus {
    ReadyToGo,
    Active,
    Stopped, // manually
    Finished, // reached zero
}

type Timer = (initTimer: number) => {
    timer: number;
    status: TimerStatus;
    start: () => void;
    stop: () => void;
    reset: () => void;
};

const DELAY = 1000;

export const useTimer: Timer = (initTimer) => {
    const [timer, setTimer] = useState(initTimer);
    const [status, setStatus] = useState(TimerStatus.ReadyToGo);

    useEffect(() => {
        if (!timer) {
            setStatus(TimerStatus.Finished);
        }

        if (status === TimerStatus.Active) {
            const timeoutId = setTimeout(() => {
                setTimer((prev) => (prev > 1 ? prev - 1 : 0));
            }, DELAY);

            return () => clearTimeout(timeoutId);
        }
    }, [status, timer]);

    const start = () => {
        setStatus(TimerStatus.Active);
    };

    const reset = () => {
        setTimer(initTimer);
        setStatus(TimerStatus.ReadyToGo);
    };

    const stop = () => {
        setStatus(TimerStatus.Stopped);
    };

    return {
        timer,
        status,
        start,
        stop,
        reset,
    };
};
