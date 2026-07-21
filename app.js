const SUPABASE_URL = "https://jzwdqjbqwrolplvbjzsv.supabase.co";
const SUPABASE_KEY = "   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6d2RxamJxd3JvbHBsdmJqenN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NDE5MDAsImV4cCI6MjEwMDIxNzkwMH0.061P7JreV0hOdV6eok10MrQCGTMnKi7tF5RXEYAUSw8   ";

const db = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


async function addCustomer(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

const { error } = await db
.from("customers")
.insert({
    name:name,
    phone:phone,
    afn:0,
    usd:0,
    pkr:0,
    eur:0
});

if(error){
 alert("ستونزه: "+error.message);
}else{
 alert("مشتری ثبت شو");
}

}
