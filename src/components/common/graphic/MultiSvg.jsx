import React from "react";

export default function MultiSvg({
    image,
    count = 10,
    rotation = { start: 0, end: 20, delta: 0 },
    opacity = { start: 0, end: 1 },
    className = "",
}) {
    if (!React.isValidElement(image)) {
        return null;
    }

    const startRotation =
        typeof rotation === "number" ? 0 : rotation.start ?? 0;

    const endRotation =
        typeof rotation === "number" ? rotation : rotation.end ?? 0;

    const deltaRotation =
        typeof rotation === "number" ? rotation : rotation.delta ?? 0;

    const startOpacity =
        typeof opacity === "number" ? opacity : opacity.start ?? 0;

    const endOpacity =
        typeof opacity === "number" ? opacity : opacity.end ?? 1;

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            {Array.from({ length: count }).map((_, index) => {
                const t = count <= 1 ? 0 : index / (count - 1);

                const currentRotation =
                    startRotation + deltaRotation +
                    (endRotation - startRotation) * t;

                const currentOpacity =
                    startOpacity +
                    (endOpacity - startOpacity) * t;

                return React.cloneElement(image, {
                    key: index,
                    style: {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        opacity: currentOpacity,

                        // Rotate around the bottom-right corner
                        transformOrigin: "100% 100%",

                        // Place the bottom-right corner at the parent's center,
                        // then rotate around it.
                        transform: `translate(-100%, -100%) rotate(${currentRotation}deg)`,
                    },
                });
            })}
        </div>
    );
}