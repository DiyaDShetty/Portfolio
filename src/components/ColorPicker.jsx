const ColorPicker = ({ setTheme }) => {
    const colors = ["#EF4444", "#A855F7", "#FACC15", "#0CAFFF", "#22C55E"];

    return (
        <div className="flex flex-row  justify-between py-6 px-6 border  rounded-lg">
            {colors.map((color) => (
                <div
                    key={color}
                    onClick={() => setTheme(color)}
                    className="w-10 h-10 rounded-full cursor-pointer border-2"
                    style={{ backgroundColor: color }}
                ></div>
            ))}
        </div>
    );
};

export default ColorPicker;
