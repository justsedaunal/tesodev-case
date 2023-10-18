import Link from 'next/link';
export default function AddNewRecord() {
  return (
    <>
      <Link href="/add-link">
        
       {/* <button className='add-new-record-button' >Back to home</button>  */}
       <button className='add-new-record-button' > Add new record </button>
      </Link>
    
    </>
  );
}
