const categories = [
    {              
        name: "უძრავი ქონება",
        id: 1
    },
    {
        name: "ბიზნესი",
        id: 2
    },
    {
        name: "მედია",
        id: 3
    }
]

const domainList = [
    {
        domainName: "example1",
        domainExtension: ".ge",
        price: 399,
        categories: [1, 2]
    },
    {
        domainName: "example2",
        domainExtension: ".com.ge",
        price: 899,
        categories: [2, 3]
    },
    {
        domainName: "example3",
        domainExtension: ".edu.ge",
        price: 1299,
        categories: [2]
    },
    {
        domainName: "example4",
        domainExtension: ".ge",
        price: 1599,
        categories: [3]
    },
    {
        domainName: "example5",
        domainExtension: ".org.ge",
        price: 2299,
        categories: [1, 3]
    },
]




export { categories, domainList }