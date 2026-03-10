from models import Vehicle, Car, Truck, ElectricCar


# ── Helper ────────────────────────────────────────────────────────────────────

def section(title: str) -> None:
    width = 60
    print(f"\n{'═' * width}")
    print(f"  {title}")
    print(f"{'═' * width}")


# ── 1. Instantiate objects ────────────────────────────────────────────────────

section("1. Creating Objects")

# Car
my_car = Car(
    make="Toyota",
    model="Camry",
    year=2022,
    num_doors=4,
    is_convertible=False
)

# Convertible Car
convertible = Car(
    make="Mazda",
    model="MX-5",
    year=2023,
    num_doors=2,
    is_convertible=True
)

# Truck
big_truck = Truck(
    make="Ford",
    model="F-350",
    year=2021,
    payload_capacity=4500
)

# Electric Car (grandchild class)
tesla = ElectricCar(
    make="Tesla",
    model="Model 3",
    year=2024,
    battery_capacity=82.0
)

print(f"Created: {my_car}")
print(f"Created: {convertible}")
print(f"Created: {big_truck}")
print(f"Created: {tesla}")
print(f"\nTotal vehicles created: {Vehicle.total_vehicles}")


# ── 2. Store objects in a list & iterate ──────────────────────────────────────

section("2. Fleet List — Full Status Report")

fleet = [my_car, convertible, big_truck, tesla]

for vehicle in fleet:
    print(f"\n▸ {vehicle}")
    print(vehicle.status())


# ── 3. Call methods on objects ────────────────────────────────────────────────

section("3. Driving the Fleet")

print("\n--- Toyota Camry ---")
my_car.accelerate(60)
my_car.accelerate(40)
my_car.brake(20)

print("\n--- Mazda MX-5 (Convertible) ---")
convertible.toggle_roof()      # open roof
convertible.accelerate(80)
convertible.toggle_roof()      # close roof

print("\n--- Ford F-350 (Truck) ---")
big_truck.load_cargo(3000)
big_truck.load_cargo(2000)     # will be capped at capacity
big_truck.accelerate(50)
big_truck.unload_cargo(1500)

print("\n--- Tesla Model 3 (Electric) ---")
tesla.accelerate(100)
tesla.refuel(15)               # recharge — overridden method
print(f"  Estimated range: {tesla.range_estimate()} km")


# ── 4. Polymorphism — same method, different behaviour ────────────────────────

section("4. Polymorphism: status() on every vehicle")

for vehicle in fleet:
    print(f"\n[{vehicle.__class__.__name__}] {vehicle}")
    print(vehicle.status())


# ── 5. isinstance() checks ────────────────────────────────────────────────────

section("5. Type Checking with isinstance()")

for vehicle in fleet:
    checks = {
        "Vehicle"    : isinstance(vehicle, Vehicle),
        "Car"        : isinstance(vehicle, Car),
        "Truck"      : isinstance(vehicle, Truck),
        "ElectricCar": isinstance(vehicle, ElectricCar),
    }
    flags = ", ".join(k for k, v in checks.items() if v)
    print(f"  {vehicle!s:<40} → {flags}")


# ── 6. Class attribute ────────────────────────────────────────────────────────

section("6. Class Attribute")
print(f"  Vehicle.total_vehicles = {Vehicle.total_vehicles}")
print("  (counts every Vehicle / subclass instance ever created)")
