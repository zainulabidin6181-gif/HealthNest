import ButtonAll from "../../component/buttons/ButtonAll"

function FooterTop() {
  return (
    <>
      <div className="h-auto py-5 bg-blue-900 ">

        <div className="container  mx-auto px-3 md:px-4 xl:px-20 2xl:px-0  h-auto ">

          <div className="md:flex" >
            <div className="md:w-6/12">
              <h2 className="text-white text-center text-3xl font-bold ">24/7 Emergency & Ambulance Service</h2>
              <p className="text-white/90 text-lg text-center">We are always ready in case of any emergency. <br /> Click the button for immediate help.</p>
            </div>
            <div className="md:w-6/12 pt-5">
              <ButtonAll text="CALL NOW: + (999) 123 456"  extraClass='mx-auto block ' />
              <ButtonAll text="VIEW ALL DOCTORS" extraClass='mx-auto mt-5 px-14 block  ' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterTop
