import pagina from './pageObjectModel';

fixture ('Primeras pruebas con test cafe')
    .page('https://devexpress.github.io/testcafe/example/')

test('Probar que la pagina abre', async t => {
    await t
    .typeText(pagina.nameDev,'Cordelia')
    .expect(pagina.nameDev.value).eql('Cory')

});

test('Probar que se puede seleccionar el checkbox Remote Testing', async t =>{
    await t
    .click(pagina.checkRemoteTest)
    .expect(pagina.checkRemoteTest.checked).ok();
});

test('Probar que se puede seleccionar el radio Linux', async t =>{
    await t
    .click(pagina.radioLinux)
    .expect(pagina.radioLinux.checked).ok();
});

test('Probar que se puede seleccinar un elemento de la lista de Interfaces', async t=>{
    await t
    .click(pagina.listInterfaces)
    .click(pagina.listElementBoth)
    .expect(pagina.listElementBoth.selected).ok();

});

test('Probar que se puede escribir un comentario', async t=>{
    await t
    .click(pagina.buttonTried)
    .typeText(pagina.textBoxComments,"Comentario sobre tu experiencia en test cafe",{sleep: 0.1})
    .typeText(pagina.textBoxComments,"Remplasar el comentario anterior ",{replace:true, sleep: 0.1});
    

});

test('Probar mover el slider',async t=>{
    await t
    .click(pagina.buttonTried)
    .expect(pagina.buttonTried.checked).ok()
    .dragToElement(pagina.slider.handle, pagina.slider.tick.withText('9'))
    const x= pagina.sliderObject.getAttribute('style')
    console.log("Valor de x: ",x);
});
