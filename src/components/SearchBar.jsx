export default function SearchBar(props) {
   return (
      <div>
      <input type='search' />
      <button onClick={(id) => {window.alert(id)}}>Agregar</button> 
      </div>
   );
}
