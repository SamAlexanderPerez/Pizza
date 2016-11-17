class pizza{
  //type constructor below
  constructor(s,mt,vt){
    this.size=s;
    this.meatToppings=mt;
    this.veggieToppings=vt;
  }


  //type instance functions below
sizeCost(){
  if(this.size="S"){
    return 7.99;
  }
  else if(this.size="M"){
    return 9.99;
  }
  else if(this.size="L"){
    return 12.99;
  }
  else if(this.size="XL"){
    return 15.99;
  }
}

toppingCost(top){
  if(top=="meat"){
    return this.meatToppings.length*0.99;
  }
  else if(top=="veggie"){
    return this.veggieToppings.length*0.50;
  }
}

price(){
  return this.sizeCost()+this.toppingCost(top);
}

  //type class functions below
static promotionalDeal(Pizza,percent){
  var deal= Pizza*percent;
  return Pizza-deal;
}

}
