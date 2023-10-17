import { Dispatch, SetStateAction } from 'react';

const ColorButton: React.FC<{
  setbgColor: (color: string) => Dispatch<SetStateAction<string>>;
  bgColor: string;
}> = ({ bgColor, setbgColor }) => {
  const colors = ['red', 'blue', 'green', 'purple', 'black'];
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const color = button.getAttribute('data-color');
    if (color) {
      setbgColor(color);
    }
  };
  return (
    <div>
      {colors.map((color, index) => (
        <button
          onClick={handleClick}
          value={color}
          data-color={color}
          className={`btn btn-${color} ${
            color === bgColor ? 'btn-active' : 'null'
          } `}
          key={index}
        />
      ))}
    </div>
  );
};
export default ColorButton;
