import { useRef, useEffect } from "react";

export default function useTimeout(callback, delay) {
    const estableCallback = useRef(callback);

    useEffect(() => {
        estableCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => estableCallback.current();
        if (typeof delay === 'number') return;
        const t = setTimeout(tick, delay);
        return () => clearTimeout(t);
    }, [delay]);

}