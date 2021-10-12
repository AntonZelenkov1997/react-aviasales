type filterPanelType = {
  id: number;
  title: string;
  isSelected: boolean;
};

const filterPanel: Array<filterPanelType> = [
  {
    id: 0,
    title: "Самый дешевый",
    isSelected: true,
  },
  {
    id: 1,
    title: "Самый быстрый",
    isSelected: false,
  },
  {
    id: 2,
    title: "Оптимальный",
    isSelected: false,
  },
];

export default filterPanel;
