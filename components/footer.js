import Container from './container';

export default function Footer() {
  return (
    <footer className='border-t bg-accent-1 border-accent-2'>
      <Container>
        <div className='flex flex-col items-center py-12 lg:flex-row'>
          <h3 className='mb-10 text-xl font-bold leading-tight tracking-tighter text-center lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2'>
            © 2021 Powered by AxieSchool Inc.
          </h3>
          <div className='flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2'>
            {/*   <a
              href='https://discord.gg/NsUavgczyP'
              className='px-12 py-3 mx-3 mb-6 font-bold text-white transition-colors duration-200 bg-black border border-black hover:bg-white hover:text-black lg:px-8 lg:mb-0'>
              Join our Discord
            </a> */}
            <a
              href={`mailto:support@axieschool.it`}
              className='mx-3 font-bold hover:underline'>
              support@axieschool.it
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
