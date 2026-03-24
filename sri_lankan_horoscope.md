# Sri Lankan Horoscope Design & Diagram Logic

This document explains the complete logic behind Sri Lankan horoscope creation, including how to calculate charts from birth data and how to design diagrams for UI.

---

## 1. Core Concepts

1. **Rashis (Zodiac Signs)**  
   - 12 signs: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces  
   - Determines general personality and life tendencies.

2. **Nakshatras (Lunar Mansions)**  
   - 27 Nakshatras, each with a ruling planet and symbol.  
   - Moon’s exact position determines Nakshatra, used for personality and compatibility.

3. **Planets (Grahas)**  
   - Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu  
   - Planets in houses influence life aspects (health, wealth, relationships, career).

4. **Houses (Bhavas)**  
   - 12 houses representing life areas:
     1. Self & Personality  
     2. Wealth & Family  
     3. Communication & Siblings  
     4. Home & Property  
     5. Creativity & Children  
     6. Health & Service  
     7. Marriage & Partnership  
     8. Transformation & Inheritance  
     9. Luck & Spirituality  
     10. Career & Status  
     11. Gains & Network  
     12. Spirituality & Losses  

5. **Dasha System**  
   - Vimshottari Dasha (planetary periods) predict timing of life events based on Moon’s Nakshatra.

---

## 2. Birth Data Adaptation

- **Birth Date:** Determines Sun sign and planetary longitudes.  
- **Birth Time:** Determines Lagna (Ascendant) and exact planetary house positions.  
- **Birth Place:** Required for geographic correction (longitude & latitude) affecting Lagna.  

### Step-by-Step

1. **Convert birth time to local sidereal time** → Lagna/Ascendant  
2. **Calculate planetary longitudes** from ephemerides  
3. **Assign planets to 12 houses** based on Lagna  
4. **Determine Moon Nakshatra and Pada**  
5. **Generate Dasha periods** from Nakshatra  

---

## 3. Diagram Creation Logic

### 3.1 Main Components

- **Circular Zodiac Chart:** Represents 12 houses around a circle  
- **Planet Icons:** Positioned inside corresponding house  
- **Nakshatra Wheel:** Shows Moon’s Nakshatra and sub-Pada  
- **Color Coding:**  
  - Green: Auspicious  
  - Red: Inauspicious  
  - Yellow: Neutral  
- **Interactive Elements:** Hover to show planet info, Nakshatra details

### 3.2 Mapping Logic

| Component | Input | Output / Placement |
|-----------|-------|------------------|
| Lagna (Ascendant) | Birth Time + Place | Starting house at 1 o’clock or top of circle |
| Planet Positions | Birth Date + Time | Placed in respective house based on longitude |
| Moon Nakshatra | Moon’s longitude | Display symbol in chart or separate Nakshatra wheel |
| Dasha Periods | Nakshatra at birth | Timeline or scrollable panel |
| Compatibility | Rashi + Nakshatra | Highlight auspicious matches in UI |

### 3.3 UI Design Tips

- Use **Tailwind** for layout & spacing  
- Use **Framer Motion** or **CSS transitions** for smooth animations:
  - Fade-in planets  
  - Rotate Nakshatra wheel  
  - Hover tooltips for houses  
- Keep **responsive design** in mind for mobile and desktop  
- Optional: Add **daily/weekly predictions panel** alongside chart  

---

## 4. Example Workflow

```text
Birth Details: 
- Date: 1995-07-12
- Time: 03:45 AM
- Place: Colombo, Sri Lanka

Step 1: Convert time → Lagna = Gemini
Step 2: Calculate planets → Sun in Cancer, Moon in Taurus, Mars in Virgo...
Step 3: Map planets to houses starting at Lagna
Step 4: Moon Nakshatra → Rohini, 2nd Pada
Step 5: Dasha → Moon Dasha started at birth
Step 6: Display interactive circular chart with planets & Nakshatra
```

---

## 5. Sinhala Version – ශ්‍රී ලාංකීය ජ්‍යොතිෂ නිර්මාණ තර්කනය

1. **රාශි (Rashis – 12)**
   * මේෂ, වෘෂභ, මිථුන, කටක, සිංහ, කන්යා, තුලා, වෘශ්චික, ධනු, මකර, කුම්භ, මීන

2. **නක්ෂත්‍ර (Nakshatras – 27)**
   * චන්ද්‍රයාගේ ස්ථානය අනුව නක්ෂත්‍ර තීරණය වේ.

3. **ග්‍රහලෝක (Grahas)**
   * සූර්යයා, චන්ද්‍රයා, කුජ, බුධ, ගුරු, ශුක්‍ර, ශනි, රාහු, කේතු

4. **ගෘහ (Houses – 12)**
   * ජීවිතයේ විවිධ ක්ෂේත්‍ර නියෝජනය කරන කොටස් 12 (උපන් ලග්නයේ සිට)

5. **දශා පද්ධතිය**
   * නක්ෂත්‍රය පදනම් කරගෙන විංශෝත්තරී දශා ගණනය කිරීම.

6. **UI/Diagram Logic**
   * වෘත්තාකාර සටහන → ගෘහ 12 + ග්‍රහලෝක
   * නක්ෂත්‍ර චක්‍රය → චන්ද්‍රයාගේ නක්ෂත්‍රය
   * වර්ණ සංකේත → සුබ / අසුබ / මධ්‍යස්ථ
   * අන්තර්ක්‍රියාකාරී අංග → hover effects, animations

---

## 6. Summary

Sri Lankan horoscope design adapts **date, time, and place** to compute:
- Lagna / Ascendant
- Planetary positions in houses
- Moon Nakshatra & Pada
- Dasha periods
- Compatibility metrics

**Diagram Logic:**
- Circular charts for houses
- Planet icons in correct houses
- Nakshatra wheel with Moon
- Color coding for auspiciousness
- Interactive animations for smooth UX
