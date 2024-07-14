import '../global.css'

const Contact = () => {
    return (
        <section className='container-fluid fs-6 text-center pb-2'>
            <h2><b>Contact Us</b></h2>
            <a href='tel:8643729283' className='m-2'>
                <button type='button' className='btn btn-success btn-lg'>Phone</button>
            </a>
            <a href='mailto:zfarmer@zfixsc.us' className='m-2'>
                <button type='button' className='btn btn-success btn-lg'>Email</button>
            </a>
        </section>
    )
}

export default Contact