class Vehicle:
    """
    Base class representing a generic vehicle.
    Attributes: make, model, year, speed (default 0)
    """

    total_vehicles = 0

    def __init__(self, make: str, model: str, year: int):
        self.make = make
        self.model = model
        self.year = year
        self.speed = 0           # Instance attribute with default value
        self._fuel_level = 100   # Protected attribute (0–100%)
        Vehicle.total_vehicles += 1

    # ── Instance methods ──────────────────────────────────────────────────────

    def accelerate(self, amount: int) -> None:
        """Increase speed by *amount* km/h (cannot exceed 300)."""
        self.speed = min(self.speed + amount, 300)
        print(f"{self} accelerates → {self.speed} km/h")

    def brake(self, amount: int) -> None:
        """Decrease speed by *amount* km/h (cannot go below 0)."""
        self.speed = max(self.speed - amount, 0)
        print(f"{self} brakes → {self.speed} km/h")

    def refuel(self, amount: int) -> None:
        """Refuel the vehicle (fuel level capped at 100%)."""
        self._fuel_level = min(self._fuel_level + amount, 100)
        print(f"{self} refuelled → fuel at {self._fuel_level}%")

    def status(self) -> str:
        """Return a formatted status summary."""
        return (
            f"  Make/Model : {self.make} {self.model} ({self.year})\n"
            f"  Speed      : {self.speed} km/h\n"
            f"  Fuel       : {self._fuel_level}%"
        )

    # ── Dunder methods ────────────────────────────────────────────────────────

    def __str__(self) -> str:
        return f"{self.year} {self.make} {self.model}"

    def __repr__(self) -> str:
        return (f"Vehicle(make={self.make!r}, model={self.model!r}, "
                f"year={self.year})")


# ── Child class 1: Car ────────────────────────────────────────────────────────

class Car(Vehicle):
    """
    A passenger car.  Adds: num_doors, is_convertible.
    Overrides: status(), __str__()
    """

    def __init__(self, make: str, model: str, year: int,
                 num_doors: int = 4, is_convertible: bool = False):
        super().__init__(make, model, year)
        self.num_doors = num_doors
        self.is_convertible = is_convertible
        self._roof_open = False

    # Unique method
    def toggle_roof(self) -> None:
        """Open or close the convertible roof (only for convertibles)."""
        if not self.is_convertible:
            print(f"{self} is not a convertible — roof cannot be toggled.")
            return
        self._roof_open = not self._roof_open
        state = "opened" if self._roof_open else "closed"
        print(f"{self} roof {state} ☀️")

    # Overridden method
    def status(self) -> str:
        roof_info = ""
        if self.is_convertible:
            roof_info = f"\n  Roof       : {'open' if self._roof_open else 'closed'}"
        return (
            super().status()
            + f"\n  Doors      : {self.num_doors}"
            + f"\n  Convertible: {'Yes' if self.is_convertible else 'No'}"
            + roof_info
        )

    def __str__(self) -> str:
        tag = " (convertible)" if self.is_convertible else ""
        return f"{self.year} {self.make} {self.model}{tag}"


# ── Child class 2: Truck ──────────────────────────────────────────────────────

class Truck(Vehicle):
    """
    A cargo truck.  Adds: payload_capacity (kg), cargo_loaded (kg).
    Overrides: status(), __str__()
    """

    def __init__(self, make: str, model: str, year: int,
                 payload_capacity: float = 5000.0):
        super().__init__(make, model, year)
        self.payload_capacity = payload_capacity  # max cargo in kg
        self.cargo_loaded = 0.0                   # current cargo in kg

    # Unique methods
    def load_cargo(self, kg: float) -> None:
        """Load cargo (cannot exceed payload_capacity)."""
        space = self.payload_capacity - self.cargo_loaded
        actual = min(kg, space)
        self.cargo_loaded += actual
        print(f"{self} loaded {actual:.0f} kg → "
              f"{self.cargo_loaded:.0f}/{self.payload_capacity:.0f} kg")

    def unload_cargo(self, kg: float) -> None:
        """Unload cargo (cannot go below 0)."""
        actual = min(kg, self.cargo_loaded)
        self.cargo_loaded -= actual
        print(f"{self} unloaded {actual:.0f} kg → "
              f"{self.cargo_loaded:.0f}/{self.payload_capacity:.0f} kg")

    # Overridden method
    def status(self) -> str:
        pct = (self.cargo_loaded / self.payload_capacity * 100
               if self.payload_capacity else 0)
        return (
            super().status()
            + f"\n  Cargo      : {self.cargo_loaded:.0f} kg "
              f"/ {self.payload_capacity:.0f} kg ({pct:.1f}% full)"
        )

    def __str__(self) -> str:
        return f"{self.year} {self.make} {self.model} [Truck]"


# ── Child class 3: ElectricCar ────────────────────────────────────────────────

class ElectricCar(Car):
    """
    An electric car (inherits from Car).
    Adds: battery_capacity (kWh), charge_level (%).
    Overrides: refuel() → recharge(), status(), __str__()
    """

    def __init__(self, make: str, model: str, year: int,
                 battery_capacity: float = 75.0, num_doors: int = 4):
        super().__init__(make, model, year, num_doors=num_doors)
        self.battery_capacity = battery_capacity  # kWh
        self._charge_level = 80.0                 # % (starts 80% charged)
        self._fuel_level = 0                      # N/A for electric

    # Overridden method — redefines refuel semantics
    def refuel(self, amount: float) -> None:
        """Recharge the battery (amount = % to add; capped at 100%)."""
        self._charge_level = min(self._charge_level + amount, 100.0)
        print(f"{self} recharged → battery at {self._charge_level:.1f}%")

    # Unique method
    def range_estimate(self) -> float:
        """Estimate remaining range in km (assumes 6 km/kWh efficiency)."""
        kwh_remaining = self.battery_capacity * (self._charge_level / 100)
        return round(kwh_remaining * 6, 1)

    # Overridden method
    def status(self) -> str:
        # Build on Car.status() but replace fuel line with battery line
        base = super().status()
        # Replace the fuel line in the parent output
        base = base.replace(
            f"  Fuel       : {self._fuel_level}%",
            f"  Battery    : {self._charge_level:.1f}% "
            f"(~{self.range_estimate()} km range)"
        )
        return base + f"\n  Capacity   : {self.battery_capacity} kWh"

    def __str__(self) -> str:
        return f"{self.year} {self.make} {self.model} ⚡"
