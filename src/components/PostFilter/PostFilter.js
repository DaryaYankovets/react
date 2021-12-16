import MySelect from "../UI/MySelect/MySelect";
import MyInput from "../UI/MyInput/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div> 
            <MyInput
                value={filter.search}
                onChange={event => setFilter({...filter, search: event.target.value})}
                placeholder="Поиск..."/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по" 
                options={[
                    {value: 'title', name: 'по наименованию'}, 
                    {value: 'body', name: 'по описанию'}
                ]}
            />
        </div>
    );
}

export default PostFilter;