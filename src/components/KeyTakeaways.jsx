export default function KeyTakeaways({ label = "Key Takeaways", children }) {
  return (
    <div className='key-takeaways'>
      <div className='key-takeaways__label'>
        <span className='key-takeaways__dot' aria-hidden='true' />
        {label}
      </div>
      {children}
    </div>
  );
}
