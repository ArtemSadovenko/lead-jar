type IconProps = {
  scale: number;
};

function PlusIcon(props: IconProps) {
  return (
    <div className="icon">
      <svg
        width={props.scale}
        height={props.scale}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19"
          stroke="#B8BDC5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 12H19"
          stroke="#B8BDC5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default PlusIcon;
