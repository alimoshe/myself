const vendorsTableColumns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',

        hidden : true, 
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
        title: 'آدرس وب سایت',
        dataIndex: 'webSiteAddress',
        key: 'webSiteAddress',
      
    },
    {
        title: 'نام رابط تامین کننده',
        dataIndex: 'agentFullName',
        key: 'agentFullName',
       
    },
    {
        title:'عملیات',
        dataIndex: 'operation',
        key : 'operation',
    
    }
];

export default  vendorsTableColumns.filter(col => col.dataIndex !== 'id');;