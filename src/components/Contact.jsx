export default function Contact(){

return(

<section className="py-20 bg-gray-100">

<div className="max-w-4xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-10">

Contact Us

</h2>

<form className="grid gap-6">

<input
type="text"
placeholder="Your Name"
className="border p-3 rounded-lg"
/>

<input
type="email"
placeholder="Email"
className="border p-3 rounded-lg"
/>

<textarea
placeholder="Message"
className="border p-3 rounded-lg"
/>

<button className="bg-blue-600 text-white py-3 rounded-lg">

Send Message

</button>

</form>

</div>

</section>

)

}