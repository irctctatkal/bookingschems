function addInstruction(text, showArrow = false) {
    // Prevent multiple instruction boxes
    if (document.getElementById("instruction-box")) return;

    // Create the instruction box
    const box = document.createElement("div");
    box.id = "instruction-box";
    Object.assign(box.style, {
        position: "fixed",
        top: "30%", // Slightly lower for prominence
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "linear-gradient(45deg, #ff1a1a, #b30000)", // Intense red gradient
        color: "#fff200", // Bright yellow text for maximum contrast
        padding: "30px 50px", // Larger padding for bigger presence
        borderRadius: "15px",
        border: "4px solid #ff6666", // Thicker, lighter red border
        boxShadow: "0 0 30px rgba(255, 0, 0, 1), 0 0 50px rgba(255, 0, 0, 0.8)", // Aggressive glow
        zIndex: "1000000", // Ensure it's on top
        fontFamily: "'Impact', Arial, sans-serif", // Bold, aggressive font
        fontSize: "32px", // Larger text
        fontWeight: "900", // Extra bold
        textAlign: "center",
        textTransform: "uppercase", // All caps for urgency
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Dark shadow for text pop
        animation: "shake 0.2s infinite, pulseGlow 0.8s infinite ease-in-out, flashBorder 1s infinite", // Multiple animations
        maxWidth: "90%", // Responsive but dominant
        lineHeight: "1.3", // Tight line height for intensity
        cursor: "pointer", // Suggests interactivity
    });
    box.textContent = text;

    // Add optional arrow
    if (showArrow) {
        const arrow = document.createElement("div");
        Object.assign(arrow.style, {
            position: "absolute",
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "0",
            height: "0",
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderTop: "30px solid #ff1a1a", // Match intense red
            filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 1))", // Strong arrow glow
        });
        box.appendChild(arrow);
    }
