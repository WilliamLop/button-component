import Button from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import startIcon from '../public/shopping-cart.svg';
import endIcon from '../public/shopping-cart.svg';

export default function Home() {
  return (
    <main className="bg-gray-700 relative">
      <section className="grid sm:grid-cols-[240px,1fr] relative">
        {/* Navbar */}
        <div className="">
          <Navbar/>
          
        </div>

        {/* Buttons-Component */}
        <div className='bg-white h-screen overflow-y-auto '>
            <section className="w-[80%] mx-auto h-screen pb-16 pt-16 sm:pt-8 sm:pb-16">
                <h1 className="text-2xl font-bold">Buttons</h1>

                <article className="mt-10 mb-10 grid gap-12">
                  {/* Content Btn default */}
                    <div className="">
                      <pre className="">Button</pre>
                      <Button variant='default' title="Default"/>
                    </div>                   
                  {/* Content Btn Outline */}
                    <div className="">
                      <pre className="">Button variant='outline'</pre>
                      <Button variant="outline" title="Outline"/>
                    </div>                
                  {/* Content Btn text */}
                    <div className="">
                      <pre className="">Button variant='text'</pre>
                      <Button variant="text" title="Text"/>
                    </div>                
                  {/* Content Btn disableShadow */}
                    <div className="">
                      <pre className="">Button variant='disableShadow'</pre>
                      <Button variant="disableShadow" title="disableShadow"/>
                    </div>   
                  {/* Container Disabled */}
                  <div className="flex flex-col md:flex-row gap-8 l:gap-12">
                    {/* Content Btn disabled */}
                      <div className="">
                        <pre className="">Button variant='disabled'</pre>
                        <Button variant="disabled" title="Disabled"/>
                      </div>  
                    {/* Content Btn text-disabled */}
                      <div className="">
                        <pre className="">Button variant='text' disabled</pre>
                        <Button variant="disabled"  title="Disabled" />
                      </div>  
                  </div>

                  {/* Containers IconsBtns */}
                  <div className="flex gap-8 flex-col md:flex-row 2xl:gap-16">
                    {/* Content Btn startIcon */}
                      <div className="">
                        <pre className="">Button startIcon='startIcon'</pre>
                        <Button color="primary" startIcon={startIcon} title="Default"/> 
                      </div>                
                    {/* Content Btn endIcon */}
                      <div className="">
                        <pre className="">Button endIcon='endIcon'</pre>
                        <Button color="primary" endIcon={endIcon} title="Default"/>
                      </div>  
                  </div>
                  {/* Container SizeBtns */}
                  <div className="flex gap-8 flex-col md:flex-row 2xl:gap-16">
                    {/* Content Btn sm */}
                      <div className="">
                        <pre className="">Button size='sm'</pre>
                        <Button color="primary" size="sm" title="Default"/>
                      </div>                
                    {/* Content Btn md */}
                      <div className="">
                        <pre className="">Button size='md'</pre>
                        <Button color="primary" size="md" title="Default"/>
                      </div>                
                    {/* Content Btn lg */}
                      <div className="">
                        <pre className="">Button size='lg'</pre>
                        <Button color="primary" size="lg" title="Default"/>
                      </div>                
                  </div>              

                  {/* Container Colors */}
                  <div className="flex gap-8 mb-8 flex-col md:flex-row 2xl:gap-16">
                    {/* Content Btn color default */}
                      <div className="">
                        <pre className="">Button color='default'</pre>
                        <Button color="default" title="Default"/>
                      </div>                
                    {/* Content Btn color primary */}
                      <div className="">
                        <pre className="">Button  color='primary'</pre>
                        <Button color="primary" title="Primary"/>
                      </div>                
                    {/* Content Btn color secondary */}
                      <div className="">
                        <pre className="">Button  color='secondary'</pre>
                        <Button color="secondary" title="Secondary"/>
                      </div>                
                    {/* Content Btn color danger */}
                      <div className="">
                        <pre className="">Button  color='danger'</pre>
                        <Button color="danger" title="Danger"/>
                      </div>                
                  </div>
                </article>
            </section>
        </div>
      </section>
    </main>
  );
}
