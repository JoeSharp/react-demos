interface Props {
  label: string;
  value: string;
}

const MonsterCardProperty: React.FC<Props> = ({ label, value }) => (
  <div>
    <span>{label}:</span>
    <span>{value}</span>
  </div>
);

export default MonsterCardProperty;
