const prouductTableColumns = [
  {
    title: "کد کالا",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "عنوان کالا",
    dataIndex: "title",
    key: "title",
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.title.includes(value),
  },
  {
    title: "قیمت ثبت شده",
    dataIndex: "registerPrice",
    key: "registerPrice",
    sorter: {
      compare: (a, b) => a.registerPrice - b.registerPrice,
      multiple: 1,
    },
  },
  {
    title: "درصد تخفیف مجاز",
    dataIndex: "discountPercent",
    key: "discountPercent",
  },
  {
    title: "تعداد در واحد فرعی",
    dataIndex: "secondaryUnitValue",
    key: "secondaryUnitValue",
  },
];

export default prouductTableColumns;
