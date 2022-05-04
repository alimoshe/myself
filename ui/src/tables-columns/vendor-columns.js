const vendorsTableColumns = [

    {
        title: 'کد شرکت',
        dataIndex: 'code',
        key: 'code',

    },
    {
        title: 'عنوان تامین کننده',
        dataIndex: 'title',
        key: 'title',
    
    },
    {
        title: 'کد اقتصادی',
        dataIndex: 'ecoCode',
        key: 'ecoCode',
      
    },
    {
        title: 'آدرس',
        dataIndex: 'address',
        key: 'address',
     
    },
    {
        title: 'نام رابط تامین کننده',
        dataIndex: 'agentFullName',
        key: 'agentFullName',
       
    },

];

export default vendorsTableColumns.filter(col => col.dataIndex !== '_id' &&  col.dataIndex !== '__v');