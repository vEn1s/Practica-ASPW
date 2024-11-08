interface IPost {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        IDatum[];
    support:     ISupport;
}

 interface IDatum {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

interface ISupport {
    url:  string;
    text: string;
}

async function fetchData<Type>(url: string): Promise<Type[]> {
    try {
        const response = await fetch(url);
        return response.json();        
    } catch (error) {
        throw error;
    }
}

export {fetchData, ISupport, IPost, IDatum}




